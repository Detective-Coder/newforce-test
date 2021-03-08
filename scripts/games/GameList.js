import {useGames} from "./GameProvider.js"
import {Games} from "./Games.js"

const gamesContainer = document.querySelector("main")

export function GameList() {
  const allTheGames = useGames()
console.log(allTheGames)
  let gameListHTMLString = ""

  gameListHTMLString = Games(allTheGames[0])

  gamesContainer.innerHTML = `<h2>Games</h2><div class="game-container">${gameListHTMLString}</div>`
}