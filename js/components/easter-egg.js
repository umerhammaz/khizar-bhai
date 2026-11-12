import { $ } from '../utils.js';

export const init = () => {
  const dot = $('#secret-dot');
  if (!dot) return;

  dot.addEventListener('click', () => {
    alert('Khizar Bhai: Always 10 steps ahead of everyone.');
  });
};