export function Games(gameObject) {
  return `
  <section class="game-card">
    <div class="game-card__text">
      <p>Game ID: ${gameObject.id}</p>
      <p>${gameObject.title}</p>
    </div>
  </section>
  `
}