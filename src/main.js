import './styles.css';
import { members } from './data.js';

const app = document.querySelector('#app');
const person = members.find(item => item.id === 'yin-yiguo');
const lang = 'zh';

const copy = value => value;
const lines = value => copy(value).replace(/\n/g, '<br>');
const personName = copy(person.name);
const plainPersonName = personName.replace(/<[^>]*>/g, '');
const assetPath = file => `/images/${person.id}/${file}`;
const siteOrigin = 'https://rancho77777.github.io';
const personBrandName = () => personName;

const ui = {
  zh: {
    home: '主页',
    about: '概览',
    info: '个人信息',
    photos: '照片墙',
    motion: '记录',
    roleLabel: '个人档案',
    heroTitle: '设计柔和的界面，\n也提供柔软的身体。',
    heroIntro:
      '这是小果展示自己的空间。我的面容，我的乳房，我的阴道，我的身体，我的羞耻，我的欲望。我不想你了解我，我只想你观赏我。',
    heroButton: '查看个人信息',
    introLabel: '个人概览',
    introTitle: '一个由\n<em>清纯表象和淫荡肉体</em>\n构成的个人档案。',
    introBody:
      '我关注交互逻辑、情绪语调，以及那些让一段体验显得亲密却不过分用力的小细节。',
    interests: '兴趣方向',
    experience: '经历',
    identity: '身份',
    credentialTitle: '个人<em>信息</em>',
    credentialIntro: '这里有小果的所有个人信息，包括基本信息、身份、学籍与工作等内容。',
    photoTitle: '照片<em>墙</em>',
    photoIntro: '哪一个才是真实的我呢？那个天真、拘谨，认真学习努力工作的好女孩小果，还是那个淫荡、欲求不满、一丝不挂地张开双腿的母狗？',
    folderHelp: '<br>或许我可以一直装成乖巧的绵羊，但我想要一次彻底的放纵，把我的一切都交给你随意羞辱践踏。',
    imagePending: '待放置图片',
    footerLabel: '尹伊果',
    footerTitles: {
      home: '设计界面，\n也展示自己。',
      about: '清纯表象，\n真实人生。',
      info: '我的经历，\n我的档案。',
      photos: '记录身体，\n也记录生活。',
      motion: '每次高潮，\n都留回味。',
    },
  },
};

const text = key => ui[lang][key];

function avatar(size = '', variant = 'overview') {
  const avatarSet = person.media?.avatar?.[variant] || person.media?.avatar?.overview;
  const images = avatarSet?.images || [avatarSet?.default, avatarSet?.hover].filter(Boolean);
  const isHomeSequence = variant === 'home' && images.length > 1;
  const imageMarkup = images
    .map(
      (image, index) =>
        `<img class="avatar-image ${index === 0 ? 'avatar-default' : isHomeSequence ? 'avatar-sequence' : 'avatar-hover'}${index === 0 ? ' is-active' : ''}" src="${assetPath(image)}" alt="${plainPersonName} avatar ${index + 1}" decoding="async"${index === 0 && variant === 'home' ? ' fetchpriority="high"' : ''} onerror="this.style.display='none';this.parentElement.classList.add('fallback-only')">`
    )
    .join('');
  return `<div class="avatar ${size}${isHomeSequence ? ' avatar-sequence-enabled' : ''}" style="--avatar-bg:${person.color}"${isHomeSequence ? ' data-avatar-index="0" data-avatar-hover-index="0"' : ''}>${imageMarkup}<span class="avatar-fallback">${person.initials}</span></div>`;
}

function header(active = 'home') {
  const navLink = (route, label) => `<a class="${active === route ? 'active' : ''}" href="/${route === 'home' ? '' : `${route}/`}">${text(label)}</a>`;
  return `<header class="site-header person-header"><a class="brand" href="#home" aria-label="${personName}"><svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M17.2 9.1c1.4 0 2.8.3 4 1 2.7 1.6 4.4 4.7 4.4 8.1 0 5.3-3.9 9.6-8.7 9.6S8.2 23.5 8.2 18.2c0-3.4 1.7-6.5 4.5-8.1 1.2-.7 2.7-1 4.1-1.1-.7-.8-1.1-1.9-1.1-3 0-.4.3-.7.7-.7 1.8 0 3.5.8 4.7 2.2.2.3.2.7 0 1-.2.3-.7.3-1 .1-.8-.8-1.8-1.3-2.9-1.6.2.9.7 1.7 1.4 2.2.3.2.4.7.2 1-.1.5-.4.7-.8.8-.3 0-.6 0-.8-.2-.7-.4-1.4-.9-1.9-1.6-.1 0-.2 0-.3 0zm0 1.5c-1.1 0-2.3.3-3.3.8-2.3 1.3-3.8 4-3.8 6.8 0 4.5 3.2 8.1 7.2 8.1s7.2-3.6 7.2-8.1c0-2.8-1.4-5.5-3.7-6.8-1-.5-2.2-.8-3.4-.8-.6.8-1.4 1.5-2.2 2-.3.2-.8.1-1-.2-.2-.3-.1-.8.2-1 .8-.5 1.5-1.2 2-2-.4-.1-.7-.1-1.2-.1z" /></svg><span class="brand-name"><span class="brand-name-primary">尹伊</span><span class="brand-name-accent">果</span></span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="打开导航菜单"><span></span><span></span><span></span></button><nav id="site-nav">${navLink('home', 'home')}${navLink('about', 'about')}${navLink('info', 'info')}${navLink('photos', 'photos')}${navLink('motion', 'motion')}</nav><div class="header-actions"></div></header>`;
}

function footer(page = 'home') {
  const title = ui[lang].footerTitles?.[page] || ui[lang].footerTitles.home;
  return `<footer><div><span class="label">${text('footerLabel')}</span><p class="footer-title">${lines(title)}</p></div><div class="footer-meta"><p>${copy(person.role)}</p><p>© 2026 ${personName} · 版权所有</p></div></footer>`;
}

function photoFlow() {
  const configuredRows = person.media?.photoRows || [];
  const fallbackFiles = person.media?.photoFiles || [];
  const rowsSource =
    configuredRows.length > 0
      ? configuredRows
      : Array.from({ length: 5 }, (_, index) => fallbackFiles.filter((_, fileIndex) => fileIndex % 5 === index));
  const rows = rowsSource
    .filter(row => row.length > 0)
    .map((rowFiles, rowIndex) => {
      const items = [...rowFiles, ...rowFiles, ...rowFiles];
      return `<div class="photo-row row-${rowIndex + 1}" style="--row-duration:${78 + rowIndex * 12}s">${items
        .map(
          (file, index) =>
            `<div class="flow-photo" style="--ratio:${[1.28, 0.82, 1.55, 1.05][(index + rowIndex) % 4]}"><img src="${assetPath(file)}" alt="${plainPersonName} photo ${index + 1}" loading="lazy" decoding="async" onload="this.parentElement.style.setProperty('--ratio', this.naturalWidth / this.naturalHeight)" onerror="this.style.display='none'"></div>`
        )
        .join('')}</div>`;
    })
    .join('');
  return `<div class="photo-flow" aria-label="${personName} ${text('photos')}">${rows}</div>`;
}

function homePage() {
  return `${header('home')}<main><section class="hero wrap"><div class="hero-copy"><p class="eyebrow">${personName} · ${text('roleLabel')}</p><h1>${lines(text('heroTitle'))}</h1><p class="hero-intro">${text('heroIntro')}</p><p class="profile-fact">${copy(person.role)}</p><a class="button" href="/info/">${text('heroButton')} <span>↗</span></a></div><div class="hero-art">${avatar('large home-avatar', 'home')}</div></section></main>${footer('home')}`;
}

function aboutPage() {
  const overviewFeature = person.overviewFeature || {};
  const content = overviewFeature.content || [
    ...(overviewFeature.image ? [{ type: 'image', file: overviewFeature.image, footnote: overviewFeature.footnote }] : []),
    ...(overviewFeature.paragraphs || []).map(value => ({ type: 'text', value })),
  ];
  const featureContent = content
    .map(item => {
      if (item.type === 'image') {
        return `<figure class="overview-feature-media"><img src="${assetPath(item.file)}" alt="${copy(item.alt || `${plainPersonName} 简介图片`)}" loading="lazy" decoding="async" onerror="this.style.display='none';this.parentElement.classList.add('missing')}">${item.footnote ? `<figcaption>${copy(item.footnote)}</figcaption>` : ''}</figure>`;
      }
      return `<p class="overview-feature-text">${copy(item.value || '')}</p>`;
    })
    .join('');
  return `${header('about')}<main class="person-page wrap"><section class="person-intro"><div>${avatar('large overview-avatar', 'overview')}</div><div><p class="eyebrow">${copy(person.role)}</p><h1>${personName}</h1><p class="person-lede">${copy(person.bio)}</p></div></section><div class="person-columns"><section><p class="section-kicker">${text('about')}</p><h2>${text('introTitle')}</h2><p class="body-copy">${copy(person.about)}</p></section><aside class="facts"><p class="section-kicker">${text('experience')}</p>${person.experience.map(item => `<div class="experience-item"><p class="experience-years">${copy(item.years)}</p><p class="experience-detail">${copy(item.detail)}</p></div>`).join('')}</aside></div><section class="overview-feature"><div class="overview-feature-copy">${featureContent}</div></section></main>${footer('about')}`;
}

function infoPage() {
  const basicInfo = person.basicInfo || [];
  const basicSection = basicInfo.length
    ? `<section class="credential-section basic-info-section"><h2 class="credential-heading">基本信息</h2><dl class="basic-info-list">${basicInfo.map(item => `<div><dt>${copy(item.label)}</dt><dd>${copy(item.value)}</dd></div>`).join('')}</dl></section>`
    : '';
  return `${header('info')}<main class="person-page wrap"><section class="info-page"><div class="section-heading"><p class="section-kicker">${personName} · ${text('identity')}</p><h1>${text('credentialTitle')}</h1><p class="hero-intro">${text('credentialIntro')}</p></div><div class="credential-sections">${basicSection}${person.credentials.map(item => {
    const images = item.images || [];
    const imageRow = images.length
      ? `<div class="credential-image-row">${images
          .map(
            (file, index) =>
              `<figure class="credential-image-frame"><img class="credential-document-image" src="${assetPath(file)}" alt="${copy(item.title)} ${index + 1}" loading="lazy" decoding="async" onerror="this.style.display='none';this.parentElement.classList.add('missing')}"><span class="credential-fallback">${text('imagePending')}</span></figure>`
          )
          .join('')}</div>`
      : `<div class="credential-image-row"><figure class="credential-image-frame missing"><span class="credential-fallback">${text('imagePending')}</span></figure></div>`;
    return `<section class="credential-section"><h2 class="credential-heading">${copy(item.title)}</h2>${imageRow}<div class="credential-text"><p class="credential-note">${copy(item.note)}</p></div></section>`;
  }).join('')}</div></section></main>${footer('info')}`;
}

function photosPage() {
  return `${header('photos')}<main class="person-page person-photos-page wrap"><section class="photo-wall"><div class="section-heading"><p class="section-kicker">${personName}</p><h1>${text('photoTitle')}</h1><p>${text('photoIntro')}${text('folderHelp')}</p></div>${photoFlow()}</section></main>${footer('photos')}`;
}

function motionPage() {
  const motion = person.media?.motion || { eyebrow: '', title: '', intro: '', items: [] };
  return `${header('motion')}<main class="person-page wrap"><section class="motion-page"><div class="motion-heading"><p class="section-kicker">${copy(motion.eyebrow)}</p><h1>${copy(motion.title)}</h1><p class="hero-intro">${copy(motion.intro)}</p></div><div class="motion-list">${motion.items.map((item, index) => `<article class="motion-item ${index % 2 ? 'motion-item-reversed' : ''}"><div class="motion-visual"><img src="${assetPath(item.file)}" alt="${personName} ${copy(item.title)}" loading="lazy" decoding="async" onerror="this.parentElement.classList.add('missing')"></div><div class="motion-copy"><p class="section-kicker">${String(index + 1).padStart(2, '0')} / ${copy(item.label)}</p><h2>${copy(item.title)}</h2><p>${copy(item.text)}</p></div></article>`).join('')}</div></section></main>${footer('motion')}`;
}

const seoByRoute = {
  home: {
    title: '尹伊果｜个人主页',
    description: '尹伊果的个人主页、教育经历、工作经历与作品照片。尹伊果毕业于南京理工大学，现任腾讯 WXG 产品经理。',
  },
  about: {
    title: '尹伊果｜个人概览',
    description: '尹伊果的个人概览，包括南京理工大学设计学经历、职业背景与个人介绍。',
  },
  info: {
    title: '尹伊果｜个人信息',
    description: '尹伊果的基本信息、身份信息、南京理工大学学籍信息与腾讯 WXG 工作信息。',
  },
  photos: {
    title: '尹伊果｜照片墙',
    description: '尹伊果的个人照片墙，记录生活、身体与不同阶段的个人影像。',
  },
  motion: {
    title: '尹伊果｜记录',
    description: '尹伊果的个人影像记录，整理与身体和感受有关的动态片段。',
  },
};

function updateSeo(route) {
  const seo = seoByRoute[route] || seoByRoute.home;
  const canonical = `${siteOrigin}${route === 'home' ? '/' : `/${route}/`}`;
  document.title = seo.title;
  document.documentElement.lang = 'zh-CN';
  const setMeta = (selector, attribute, value) => {
    const element = document.head.querySelector(selector);
    if (element) element.setAttribute(attribute, value);
  };
  setMeta('meta[name="description"]', 'content', seo.description);
  setMeta('meta[property="og:title"]', 'content', seo.title);
  setMeta('meta[property="og:description"]', 'content', seo.description);
  setMeta('meta[property="og:url"]', 'content', canonical);
  setMeta('link[rel="canonical"]', 'href', canonical);
}

function render() {
  const route = location.pathname.split('/').filter(Boolean)[0] || 'home';
  if (route === 'about') app.innerHTML = aboutPage();
  else if (route === 'info') app.innerHTML = infoPage();
  else if (route === 'photos') app.innerHTML = photosPage();
  else if (route === 'motion') app.innerHTML = motionPage();
  else app.innerHTML = homePage();

  updateSeo(route);

  const headerElement = app.querySelector('.site-header');
  const menuToggle = app.querySelector('.menu-toggle');
  const nav = app.querySelector('#site-nav');
  const closeMenu = () => {
    if (!headerElement || !menuToggle) return;
    headerElement.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };
  if (menuToggle && headerElement && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = headerElement.classList.toggle('menu-open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  }
  const brand = app.querySelector('.brand');
  if (brand) {
    brand.setAttribute('href', '/');
    brand.addEventListener('click', event => {
      event.preventDefault();
      history.pushState({}, '', '/');
      render();
    });
  }

  app.querySelectorAll('.avatar-sequence-enabled').forEach(avatarElement => {
    avatarElement.addEventListener('mouseenter', () => {
      const images = avatarElement.querySelectorAll('.avatar-image');
      const nextHoverIndex = (Number(avatarElement.dataset.avatarHoverIndex) % (images.length - 1)) + 1;
      avatarElement.dataset.avatarHoverIndex = String(nextHoverIndex);
      avatarElement.dataset.avatarIndex = String(nextHoverIndex);
      images.forEach((image, index) => image.classList.toggle('is-active', index === nextHoverIndex));
    });
    avatarElement.addEventListener('mouseleave', () => {
      avatarElement.dataset.avatarIndex = '0';
      avatarElement.querySelectorAll('.avatar-image').forEach((image, index) => image.classList.toggle('is-active', index === 0));
    });
  });

  window.scrollTo({ top: 0, behavior: 'instant' });
}

const legacyRoute = location.hash.slice(1);
if (['about', 'info', 'photos', 'motion'].includes(legacyRoute)) {
  history.replaceState({}, '', `/${legacyRoute}/`);
}

window.addEventListener('popstate', render);
render();
