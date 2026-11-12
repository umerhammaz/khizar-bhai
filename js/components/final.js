import { $, toggleHidden } from '../utils.js';

export const init = () => {
  const btn = $('#final-toggle');
  const box = $('#final-box');
  if (!btn || !box) return;

  btn.addEventListener('click', () => {
    toggleHidden(box);
  });
};