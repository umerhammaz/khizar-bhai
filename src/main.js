import { ERAS, CATEGORIES, EVENTS } from './data.js';
import { renderTimeline } from './timeline.js';

const state = {
  selectedEra: 'all',
  selectedCategory: 'All',
  searchQuery: ''
};

function getFilteredEvents() {
  const query = state.searchQuery.toLowerCase().trim();
  return EVENTS.filter(ev => {
    const matchEra = state.selectedEra === 'all' || ev.era === state.selectedEra;
    const matchCat = state.selectedCategory === 'All' || ev.category === state.selectedCategory;
    const matchSearch = !query ||
      ev.title.toLowerCase().includes(query) ||
      ev.summary.toLowerCase().includes(query) ||
      ev.details.toLowerCase().includes(query) ||
      ev.year.toLowerCase().includes(query);
    return matchEra && matchCat && matchSearch;
  });
}

function updateTimeline() {
  const timelineEl = document.getElementById('timeline');
  const dialog = document.getElementById('detail-dialog');
  const dialogContent = document.getElementById('dialog-content');

  renderTimeline(timelineEl, getFilteredEvents(), event => {
    dialogContent.innerHTML = `
      <h2>${event.title}</h2>
      <div class="meta">${event.year} &bull; ${event.category}</div>
      <p>${event.details}</p>
    `;
    dialog.showModal();
  });
}

function initNav() {
  const eraNav = document.getElementById('era-nav');
  eraNav.innerHTML = ERAS.map(era => `
    <button class="btn ${era.id === state.selectedEra ? 'active' : ''}" data-era="${era.id}">
      ${era.label}
    </button>
  `).join('');

  eraNav.addEventListener('click', e => {
    const btn = e.target.closest('button[data-era]');
    if (!btn) return;
    state.selectedEra = btn.dataset.era;
    eraNav.querySelectorAll('button').forEach(b => b.classList.toggle('active', b === btn));
    updateTimeline();
  });

  const tagNav = document.getElementById('tag-filters');
  tagNav.innerHTML = CATEGORIES.map(cat => `
    <button class="btn ${cat === state.selectedCategory ? 'active' : ''}" data-cat="${cat}">
      ${cat}
    </button>
  `).join('');

  tagNav.addEventListener('click', e => {
    const btn = e.target.closest('button[data-cat]');
    if (!btn) return;
    state.selectedCategory = btn.dataset.cat;
    tagNav.querySelectorAll('button').forEach(b => b.classList.toggle('active', b === btn));
    updateTimeline();
  });

  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', e => {
    state.searchQuery = e.target.value;
    updateTimeline();
  });

  const dialog = document.getElementById('detail-dialog');
  const closeBtn = document.getElementById('dialog-close');
  closeBtn.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => {
    if (e.target === dialog) dialog.close();
  });
}

initNav();
updateTimeline();