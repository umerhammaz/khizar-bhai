import { $, setHidden } from '../utils.js';

export const init = () => {
  const form = $('#gate-form');
  const passInput = $('#gate-pass');
  const errorMsg = $('#gate-error');
  const gateSec = $('#gate');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const pass = passInput.value.trim();
    if (pass === '786' || pass.toLowerCase() === 'khizar' || pass.toLowerCase() === 'bhai') {
      document.body.classList.add('unlocked');
      gateSec.remove();
    } else {
      setHidden(errorMsg, false);
      passInput.focus();
    }
  });
};