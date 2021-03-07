import {useGames} from "./GameProvider.js"
import {Games} from "./Games.js"

const gamesContainer = document.querySelector("main")

export function gameList() {
  const allTheGames = useGames()

  let gameListHTMLString = ""

  for(let i = 0; i < allTheGames.length; i++) {
    gameListHTMLString += Games(allTheGames[i])
  }

  gamesContainer.innerHTML = `<h2>Games</h2><div class="game-container">${gameListHTMLString}</div>`
}