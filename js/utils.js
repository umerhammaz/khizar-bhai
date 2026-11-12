export const $ = (selector, parent = document) => parent.querySelector(selector);
export const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

export const onReady = (fn) => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

export const setHidden = (el, hidden) => {
  if (!el) return;
  if (hidden) {
    el.setAttribute('hidden', '');
  } else {
    el.removeAttribute('hidden');
  }
};

export const toggleHidden = (el) => {
  if (!el) return;
  setHidden(el, !el.hasAttribute('hidden'));
};

export const safeImage = (imgEl, fallbackUrl) => {
  imgEl.addEventListener('error', () => {
    imgEl.src = fallbackUrl;
  }, { once: true });
};

export const cloneTpl = (tplId) => {
  const tpl = document.getElementById(tplId);
  return tpl.content.cloneNode(true);
};