export function renderTimeline(container, events, onSelect) {
  if (!events.length) {
    container.innerHTML = '<p class="card-summary" style="margin-left: 50px;">No historical events found matching your criteria.</p>';
    return;
  }

  container.innerHTML = events.map(ev => `
    <article class="timeline-card" data-id="${ev.id}">
      <header class="card-header">
        <span class="card-year">${ev.year}</span>
        <span class="card-tag">${ev.category}</span>
      </header>
      <h2 class="card-title">${ev.title}</h2>
      <p class="card-summary">${ev.summary}</p>
    </article>
  `).join('');

  container.querySelectorAll('.timeline-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      const found = events.find(e => e.id === id);
      if (found && onSelect) onSelect(found);
    });
  });
}