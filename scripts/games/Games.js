export function Games(gameObject) {
  return `
  <section class="game-card">
    <div class="game-card__text">
      <img src="${gameObject.background_image}" height="300">
      <h3>${gameObject.name}</h3>
      <p>${gameObject.genres[0].name}</p>
      <p>${gameObject.genres[1].name}</p>
    </div>
  </section>
  `
}