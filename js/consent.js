(function(){
  'use strict';

  var STORAGE_KEY = 'cookie_consent_v1';
  var SUPPORTED_CATS = ['necessary','preferences'];

  function getLang(){
    try{
      var stored = localStorage.getItem('site_lang');
      if (stored && (stored === 'en' || stored === 'ru')) return stored;
    }catch(e){}
    var nav = (navigator.language||'en').toLowerCase();
    if (nav.startsWith('ru')) return 'ru';
    return 'en';
  }

  var text = {
    en: {
      banner_title: 'We use cookies',
      banner_desc: 'We use essential cookies to make this site work. With your consent, we may enable additional features (e.g., embedded maps) that can set cookies on your device.',
      btn_accept: 'Accept all',
      btn_reject: 'Reject non‑essential',
      btn_customize: 'Customize',
      modal_title: 'Cookie preferences',
      modal_desc: 'Choose which cookies to allow. You can change your choice anytime in Cookie Settings.',
      cat_necessary: 'Necessary — required for the website to function (always on).',
      cat_preferences: 'Preferences — enables Google Maps and similar features.',
      btn_save: 'Save preferences',
      btn_cancel: 'Cancel'
    },
    ru: {
      banner_title: 'Мы используем файлы cookie',
      banner_desc: 'Мы применяем необходимые cookie для работы сайта. С вашего согласия можем включать дополнительные функции (например, карты Google), которые могут устанавливать cookie на ваше устройство.',
      btn_accept: 'Принять все',
      btn_reject: 'Отклонить не обязательные',
      btn_customize: 'Настроить',
      modal_title: 'Настройки файлов cookie',
      modal_desc: 'Выберите, какие cookie разрешить. Вы можете изменить выбор в любое время через «Настройки файлов cookie».',
      cat_necessary: 'Необходимые — требуются для работы сайта (всегда включены).',
      cat_preferences: 'Предпочтения — включает Google Maps и похожие функции.',
      btn_save: 'Сохранить',
      btn_cancel: 'Отмена'
    }
  };

  function getConsent(){
    try{
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      // normalize
      if (!parsed.categories) parsed.categories = {};
      SUPPORTED_CATS.forEach(function(c){
        if (c === 'necessary') parsed.categories[c] = true;
        else parsed.categories[c] = !!parsed.categories[c];
      });
      return parsed;
    }catch(e){ return null; }
  }

  function setConsent(categories){
    var data = {
      ts: Date.now(),
      version: 1,
      categories: {
        necessary: true,
        preferences: !!categories.preferences
      }
    };
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }catch(e){}
    applyConsent();
  }

  function hasConsentFor(cat){
    var c = getConsent();
    if (cat === 'necessary') return true;
    return !!(c && c.categories && c.categories[cat]);
  }

  function loadScriptFrom(el){
    var src = el.getAttribute('data-src');
    if (!src) return;
    var s = document.createElement('script');
    s.src = src;
    // preserve attributes where meaningful
    if (el.getAttribute('defer') != null) s.defer = true;
    if (el.getAttribute('async') != null) s.async = false; // keep order
    el.parentNode.insertBefore(s, el);
    el.parentNode.removeChild(el);
  }

  function applyConsent(){
    // Load any pending scripts that match allowed categories, in DOM order
    var pending = document.querySelectorAll('script[type="text/plain"][data-consent][data-src]');
    pending.forEach(function(el){
      var cat = el.getAttribute('data-consent');
      if (hasConsentFor(cat)){
        loadScriptFrom(el);
      }
    });
  }

  // UI
  function createBanner(){
    if (document.getElementById('cookie-banner')) return;
    var lang = getLang();
    var t = (text[lang]||text.en);
    var bar = document.createElement('div');
    bar.id = 'cookie-banner';
    bar.setAttribute('role','region');
    bar.setAttribute('aria-label','Cookie consent');
    bar.innerHTML = ''+
      '<div class="cc-inner">' +
        '<div class="cc-text">' +
          '<strong>'+ t.banner_title +'</strong><br/>' +
          '<span>'+ t.banner_desc +'</span>' +
        '</div>' +
        '<div class="cc-actions">' +
          '<button type="button" class="cc-btn cc-accept">'+ t.btn_accept +'</button>' +
          '<button type="button" class="cc-btn cc-reject">'+ t.btn_reject +'</button>' +
          '<button type="button" class="cc-btn cc-customize">'+ t.btn_customize +'</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(bar);

    bar.querySelector('.cc-accept').addEventListener('click', function(){ setConsent({preferences:true}); dismissBanner(); });
    bar.querySelector('.cc-reject').addEventListener('click', function(){ setConsent({preferences:false}); dismissBanner(); });
    bar.querySelector('.cc-customize').addEventListener('click', function(){ openModal(); });
  }

  function dismissBanner(){
    var el = document.getElementById('cookie-banner');
    if (el) el.parentNode.removeChild(el);
  }

  function openModal(){
    if (document.getElementById('cookie-modal')) return;
    var lang = getLang();
    var t = (text[lang]||text.en);
    var wrap = document.createElement('div');
    wrap.id = 'cookie-modal';
    wrap.setAttribute('role','dialog');
    wrap.setAttribute('aria-modal','true');
    wrap.innerHTML = ''+
      '<div class="cc-backdrop"></div>'+
      '<div class="cc-modal">'+
        '<div class="cc-modal-header">'+ t.modal_title +'</div>'+
        '<div class="cc-modal-body">'+
          '<p>'+ t.modal_desc +'</p>'+
          '<ul class="cc-list">'+
            '<li><label><input type="checkbox" checked disabled> '+ t.cat_necessary +'</label></li>'+
            '<li><label><input type="checkbox" class="cc-pref"> '+ t.cat_preferences +'</label></li>'+
          '</ul>'+
        '</div>'+
        '<div class="cc-modal-actions">'+
          '<button type="button" class="cc-btn cc-cancel">'+ t.btn_cancel +'</button>'+
          '<button type="button" class="cc-btn cc-save">'+ t.btn_save +'</button>'+
        '</div>'+
      '</div>';
    document.body.appendChild(wrap);

    var existing = getConsent();
    var pref = wrap.querySelector('.cc-pref');
    if (existing && existing.categories) pref.checked = !!existing.categories.preferences;

    wrap.querySelector('.cc-backdrop').addEventListener('click', closeModal);
    wrap.querySelector('.cc-cancel').addEventListener('click', closeModal);
    wrap.querySelector('.cc-save').addEventListener('click', function(){
      setConsent({preferences: !!pref.checked});
      closeModal();
      dismissBanner();
    });

    // focus management
    try{ wrap.querySelector('.cc-save').focus(); }catch(e){}
  }

  function closeModal(){
    var el = document.getElementById('cookie-modal');
    if (el) el.parentNode.removeChild(el);
  }

  function ensureManageLink(){
    // Allow external link with [data-consent-open] to open the modal
    document.addEventListener('click', function(e){
      var a = e.target.closest('[data-consent-open]');
      if (a){ e.preventDefault(); openModal(); }
    });
  }

  function onLangSwitch(){
    document.addEventListener('click', function(e){
      var a = e.target.closest('[data-lang-switch] [data-lang]');
      if (a){
        // re-render texts if banner or modal visible
        setTimeout(function(){
          var b = document.getElementById('cookie-banner');
          if (b){ b.parentNode.removeChild(b); createBanner(); }
          var m = document.getElementById('cookie-modal');
          if (m){ m.parentNode.removeChild(m); openModal(); }
        }, 0);
      }
    });
  }

  function init(){
    // Inject minimal styles if not present
    if (!document.getElementById('cookie-consent-styles')){
      var css = document.createElement('style');
      css.id = 'cookie-consent-styles';
      css.textContent = "\n#cookie-banner{position:fixed;left:0;right:0;bottom:0;background:#0b132b;color:#fff;z-index:2147483640;padding:12px 10px;font-size:14px;}\n#cookie-banner .cc-inner{max-width:1140px;margin:0 auto;display:flex;gap:16px;align-items:center;justify-content:space-between;flex-wrap:wrap;}\n#cookie-banner .cc-text{flex:1 1 320px;}\n#cookie-banner .cc-actions{display:flex;gap:8px;flex-wrap:wrap;}\n#cookie-banner .cc-btn{background:#ffffff; color:#0b132b; border:0; padding:8px 12px; border-radius:4px; cursor:pointer;}\n#cookie-banner .cc-btn.cc-accept{background:#28a745;color:#fff;}\n#cookie-banner .cc-btn.cc-reject{background:#6c757d;color:#fff;}\n#cookie-modal .cc-backdrop{position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:2147483641;}\n#cookie-modal .cc-modal{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);background:#fff;color:#212529;border-radius:6px;max-width:520px;width:92%;z-index:2147483642;box-shadow:0 10px 30px rgba(0,0,0,0.25);}\n#cookie-modal .cc-modal-header{padding:14px 16px;font-weight:600;border-bottom:1px solid #e9ecef;}\n#cookie-modal .cc-modal-body{padding:12px 16px;}\n#cookie-modal .cc-modal-actions{padding:12px 16px;display:flex;justify-content:flex-end;gap:8px;border-top:1px solid #e9ecef;}\n#cookie-modal .cc-btn{background:#0b132b;color:#fff;border:0;padding:8px 12px;border-radius:4px;cursor:pointer;}\n#cookie-modal .cc-btn.cc-cancel{background:#6c757d;}\n#cookie-modal .cc-list{list-style:none;padding-left:0;}\n#cookie-modal .cc-list li{margin:6px 0;}\n";
      document.head.appendChild(css);
    }

    ensureManageLink();
    onLangSwitch();

    var consent = getConsent();
    if (!consent){
      createBanner();
    } else {
      applyConsent();
    }
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // expose minimal API
  window.CookieConsent = {
    get: getConsent,
    set: setConsent,
    open: openModal,
    apply: applyConsent
  };
})();
