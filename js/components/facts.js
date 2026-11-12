import { $, cloneTpl } from '../utils.js';
import { FACTS } from '../data/facts-data.js';

export const init = () => {
  const mount = $('#facts-mount');
  if (!mount) return;

  FACTS.forEach(fact => {
    const node = cloneTpl('tpl-fact');
    node.querySelector('.fact-title').textContent = fact.title;
    node.querySelector('.fact-desc').textContent = fact.desc;
    mount.appendChild(node);
  });
};