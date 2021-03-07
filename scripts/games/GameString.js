import {useGames} from "./GameProvider.js"
import {Games} from "./Games.js"

const gamesContainer = document.querySelector("main")

export function gameList() {
  const allTheGames = useGames()


 

  gamesContainer.innerHTML = `<h2>Games</h2><div class="game-container">${allTheGames}</div>`
}