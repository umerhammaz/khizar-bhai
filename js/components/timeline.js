import { $, cloneTpl, safeImage } from '../utils.js';
import { TIMELINE } from '../data/timeline-data.js';
import { MEDIA } from '../data/media.js';

export const init = () => {
  const mount = $('#timeline-mount');
  if (!mount) return;

  TIMELINE.forEach(item => {
    const node = cloneTpl('tpl-memory');
    node.querySelector('.timeline-date').textContent = item.date;
    node.querySelector('.timeline-title').textContent = item.title;
    node.querySelector('.timeline-text').textContent = item.text;
    const img = node.querySelector('.timeline-img');
    img.src = item.imageUrl;
    safeImage(img, MEDIA.placeholder);
    mount.appendChild(node);
  });
};