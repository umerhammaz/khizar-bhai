import { $, cloneTpl } from '../utils.js';
import { AWARDS } from '../data/awards-data.js';

export const init = () => {
  const mount = $('#awards-mount');
  if (!mount) return;

  AWARDS.forEach(award => {
    const node = cloneTpl('tpl-award');
    node.querySelector('.award-icon').textContent = award.icon;
    node.querySelector('.award-name').textContent = award.name;
    node.querySelector('.award-desc').textContent = award.desc;
    mount.appendChild(node);
  });
};