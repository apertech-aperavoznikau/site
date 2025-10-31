(function(){
  const STORAGE_KEY = 'site_lang';
  const SUPPORTED = ['en','ru'];

  const dict = {
    en: {
      // Global/nav/footer
      'nav.main': 'Home',
      'nav.mentoring': 'Mentoring',
      'nav.psychology': 'Psychology',
      'footer.cookieSettings': 'Cookie Settings',
      'social.facebook': 'Facebook',
      'social.instagram': 'Instagram',
      'social.telegram': 'Telegram',

      // Index
      'title.index': 'Mentor in IT | Consulting psychologist | Artsiom Peravoznikau',
      'index.intro.p1': "Hi, I'm Artsiom Peravoznikau, a certified <b>consulting psychologist</b> specializing in Gestalt therapy, and also a certified <b>mentor and coach</b>. I prioritize creating a safe, understanding space where clients feel truly heard. My psychological expertise, grounded in Gestalt principles of awareness and responsibility, forms a strong foundation for all my work—whether in therapy, coaching, or mentoring. This unique integration is particularly beneficial for IT leaders, allowing us to address not only skills but also deeper aspects like motivation, communication strategies, stress management, and emotional intelligence. My goal is to unlock true potential, fostering holistic growth for both personal and professional success.",
      'index.intro.h2': 'What I rely on in my work:',
      'index.intro.li2': 'Psychological education at the <a style="color: cornflowerblue" href="https://eeip.ru">Eastern European Institute of Psychoanalysis</a> with the qualification "Counseling Psychologist"',
      'index.intro.li3': 'Specialization in <a style="color: cornflowerblue" href="https://gestalt-podhod.by/krizisy-i-travmy-integrativnyj-geshtalt-podhod">CRISES AND TRAUMAS: AN INTEGRATIVE GESTALT APPROACH</a>',
      'index.intro.li4': 'Practical experience in working with crisis situations and traumas, allowing for the integration of various approaches',
      'index.contact.h2': 'To book an appointment, please send a direct message through your preferred app:',

      // Mentoring
      'title.mentoring': 'Mentoring in IT | Artsiom Peravoznikau',
      'mentoring.h2': 'Mentoring & Leadership Coaching',
      'mentoring.p1': 'I help engineers and managers grow faster through practical, real-world mentoring. Together we work on career strategy, leadership skills, communication, decision-making, priority management, and building healthy, sustainable performance without burnout. The approach blends coaching tools with my IT leadership background.',
      'mentoring.ul.li1': '10+ years in IT management and leadership',
      'mentoring.ul.li2': 'Individual mentoring for engineers, team leads, EMs and Heads',
      'mentoring.ul.li3': 'Topics: growth plans, feedback culture, stakeholder management, focus, stress-resilience',
      'mentoring.counter1': 'years in IT leadership',
      'mentoring.counter2': 'hours of 1:1 sessions',
      'mentoring.counter3': 'long-term mentees',
      'mentoring.pricing.h2': 'Mentoring — pricing',
      'common.session': 'Session',
      'common.minutes50': '50 minutes',
      'common.online': 'Online',
      'mentoring.pricing.li1': 'Focused on your current goals',
      'mentoring.book.h2': 'Book a mentoring session via your preferred app:',
        'mentoring.spec.h2': 'What I work with',
        'mentoring.spec.item1.h3': 'Career strategy and growth plans',
        'mentoring.spec.item1.p': 'Clarifying goals, building a roadmap, and developing key competencies for the next career step.',
        'mentoring.spec.item2.h3': 'Leadership and communication',
        'mentoring.spec.item2.p': 'Feedback culture, stakeholder management, decision‑making, delegation, and team dynamics.',
        'mentoring.spec.item3.h3': 'Productivity and resilience',
        'mentoring.spec.item3.p': 'Focus and priorities, sustainable performance, burnout prevention, and stress‑resilience.',

      // Psychology
      'title.psychology': 'Consulting Psychologist | Artsiom Peravoznikau',
      'psych.h2': 'Consulting Psychologist (Gestalt)',
      'psych.p1': 'I create a safe, supportive space for individual therapy grounded in Gestalt principles of awareness and responsibility. We can work on anxiety, stress, crises, trauma, relationships, self-worth, and building emotional resilience. The process is gentle, respectful, and focused on your pace and goals.',
      'psych.ul.li1': 'Psychological education — Eastern European Institute of Psychoanalysis',
      'psych.ul.li2': 'Specialization: Crises and Traumas — Integrative Gestalt approach',
      'psych.ul.li3': 'Experience in crisis and trauma work, integrating multiple modalities',
      'psych.counter1': 'years in private practice',
      'psych.counter2': 'hours of personal sessions',
      'psych.counter3': 'clients',
      'psych.spec.h2': 'Areas I specialize in',
      'psych.spec.item1.h3': 'Support in challenging times',
      'psych.spec.item1.p': 'I recognize the distinct stress factors and challenges encountered by professionals across different sectors, and I provide effective strategies for managing them.',
      'psych.spec.item2.h3': 'Working with trauma',
      'psych.spec.item2.p': 'I help clients explore trauma, restore their sense of self-worth, and build healthy relationships with themselves and others.',
      'psych.spec.item3.h3': 'Crisis counseling',
      'psych.spec.item3.p': 'Offering support in tough times, when finding the strength and resources to overcome crises and restore a sense of normalcy is crucial.',
      'psych.pricing.h2': 'Psychology — pricing',
      'psych.pricing.li1': 'Working with the presenting issue',
      'psych.book.h2': 'To book an appointment, message me via:'
    },
    ru: {
      // Global/nav/footer
      'nav.main': 'Главная',
      'nav.mentoring': 'Менторство',
      'nav.psychology': 'Психология',
      'footer.cookieSettings': 'Настройки файлов cookie',
      'social.facebook': 'Facebook',
      'social.instagram': 'Instagram',
      'social.telegram': 'Telegram',

      // Index
      'title.index': 'Ментор в IT | Консультирующий психолог | Артсиом Перавознікаў',
      'index.intro.p1': 'Привет! Я Артем Перевозников — сертифицированный <b>консультирующий психолог</b> (гештальт-подход), а также сертифицированный <b>ментор и коуч</b>. Я создаю безопасное и принимающее пространство, где клиента по‑настоящему слышат. Психологическая база, основанная на принципах осознанности и ответственности, лежит в основе моей работы — в терапии, коучинге и менторстве. Такая интеграция особенно полезна для IT‑руководителей: мы развиваем не только навыки, но и работаем с мотивацией, стратегиями коммуникации, управлением стрессом и эмоциональным интеллектом. Моя цель — раскрывать потенциал и способствовать целостному личному и профессиональному росту.',
      'index.intro.h2': 'На что я опираюсь в работе:',
      'index.intro.li2': 'Психологическое образование в <a style="color: cornflowerblue" href="https://eeip.ru">Восточно‑Европейском институте психоанализа</a>, квалификация «Консультирующий психолог»',
      'index.intro.li3': 'Специализация «<a style="color: cornflowerblue" href="https://gestalt-podhod.by/krizisy-i-travmy-integrativnyj-geshtalt-podhod">КРИЗИСЫ И ТРАВМЫ: ИНТЕГРАТИВНЫЙ ГЕШТАЛЬТ‑ПОДХОД</a>»',
      'index.intro.li4': 'Практический опыт работы с кризисами и травмами, интеграция различных подходов',
      'index.contact.h2': 'Для записи напишите в удобный для вас мессенджер:',

      // Mentoring
      'title.mentoring': 'Менторинг в IT | Артем Перевозников',
      'mentoring.h2': 'Менторинг и лидерский коучинг',
      'mentoring.p1': 'Помогаю инженерам и руководителям расти быстрее через практичный менторинг. Работаем над карьерной стратегией, лидерскими навыками, коммуникацией, принятием решений, управлением приоритетами и устойчивой продуктивностью без выгорания. Подход сочетает коучинговые инструменты и мой опыт руководства в IT.',
      'mentoring.ul.li1': '10+ лет в управлении и лидерстве в IT',
      'mentoring.ul.li2': 'Индивидуальное менторство для инженеров, тимлидов, EM и Heads',
      'mentoring.ul.li3': 'Темы: планы роста, культура обратной связи, работа со стейкхолдерами, фокус, стрессоустойчивость',
      'mentoring.counter1': 'лет в лидерстве в IT',
      'mentoring.counter2': 'часов индивидуальных сессий',
      'mentoring.counter3': 'долгосрочных клиентов',
      'mentoring.pricing.h2': 'Цены',
      'common.session': 'Сессия',
      'common.minutes50': '50 минут',
      'common.online': 'Онлайн',
      'mentoring.pricing.li1': 'Фокус на ваших текущих целях',
      'mentoring.book.h2': 'Записаться на менторскую сессию через удобный вам сервис:',

      // Psychology
      'title.psychology': 'Консультирующий психолог | Артем Перевозников',
      'psych.h2': 'Консультирующий психолог (гештальт)',
      'psych.p1': 'Создаю безопасное, поддерживающее пространство для индивидуальной терапии на принципах гештальта — осознанности и ответственности. Работаем с тревогой, стрессом, кризисами, травмой, отношениями, самооценкой и развитием эмоциональной устойчивости. Процесс бережный, уважительный и ориентирован на ваш темп и цели.',
      'psych.ul.li1': 'Психологическое образование — Восточно‑Европейский институт психоанализа',
      'psych.ul.li2': 'Специализация: кризисы и травмы — интегративный гештальт‑подход',
      'psych.ul.li3': 'Опыт работы с кризисами и травмой, интеграция разных модальностей',
      'psych.counter1': 'лет частной практики',
      'psych.counter2': 'часов личных сессий',
      'psych.counter3': 'клиентов',
      'psych.spec.h2': 'С чем я работаю',
      'psych.spec.item1.h3': 'Поддержка в сложные периоды',
      'psych.spec.item1.p': 'Понимаю специфические стресс‑факторы и вызовы в разных сферах и помогаю выработать эффективные стратегии их преодоления.',
      'psych.spec.item2.h3': 'Работа с травмой',
      'psych.spec.item2.p': 'Помогаю исследовать травматический опыт, восстановить чувство собственной ценности и выстраивать здоровые отношения с собой и другими.',
      'psych.spec.item3.h3': 'Кризисное консультирование',
      'psych.spec.item3.p': 'Поддержка в трудные времена, когда важно найти силы и ресурсы для выхода из кризиса и вернуть ощущение опоры.',
      'psych.pricing.h2': 'Психология — цены',
      'psych.pricing.li1': 'Работа с актуальным запросом',
      'psych.book.h2': 'Для записи напишите мне в:',
        'mentoring.spec.h2': 'С чем я работаю',
        'mentoring.spec.item1.h3': 'Карьерная стратегия и планы роста',
        'mentoring.spec.item1.p': 'Определение целей, дорожная карта и развитие ключевых компетенций для следующего шага.',
        'mentoring.spec.item2.h3': 'Лидерство и коммуникация',
        'mentoring.spec.item2.p': 'Культура обратной связи, управление стейкхолдерами, принятие решений, делегирование и командная динамика.',
        'mentoring.spec.item3.h3': 'Продуктивность и устойчивость',
        'mentoring.spec.item3.p': 'Фокус и приоритеты, устойчивая эффективность, профилактика выгорания и стрессоустойчивость.',

    }
  };

  function getPreferredLang(){
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (nav.startsWith('ru')) return 'ru';
    return 'en';
  }

  function setLang(lang){
    if (!SUPPORTED.includes(lang)) lang = 'en';
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
  }

  function t(lang, key){
    return (dict[lang] && dict[lang][key]) || dict.en[key] || '';
  }

  function applyTranslations(lang){
    // Update html lang
    try { document.documentElement.setAttribute('lang', lang); } catch(e){}

    // Update title based on page identity by data-page attribute on body
    const page = document.body && document.body.getAttribute('data-page');
    if (page) {
      const titleKey = 'title.' + page;
      const translatedTitle = t(lang, titleKey);
      if (translatedTitle) document.title = translatedTitle;
    }

    // Replace texts for elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const html = t(lang, key);
      if (html) {
        el.innerHTML = html;
      }
    });

    // Update tooltips/titles if data-i18n-title exists
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const value = t(lang, key);
      if (value) el.setAttribute('title', value);
    });

    // Update active state in switcher
    updateSwitcher(lang);
  }

  function updateSwitcher(lang){
    document.querySelectorAll('[data-lang-switch] [data-lang]').forEach(a => {
      if (a.getAttribute('data-lang') === lang) {
        a.classList.add('active');
        a.style.fontWeight = '600';
        a.style.textDecoration = 'underline';
      } else {
        a.classList.remove('active');
        a.style.fontWeight = '';
        a.style.textDecoration = '';
      }
    });
  }

  function initLang(){
    const lang = getPreferredLang();
    applyTranslations(lang);

    // Delegate click on switcher
    document.addEventListener('click', function(e){
      const a = e.target.closest('[data-lang-switch] [data-lang]');
      if (a){
        e.preventDefault();
        setLang(a.getAttribute('data-lang'));
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initLang);
})();
