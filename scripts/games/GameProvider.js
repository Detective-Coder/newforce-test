let games = []

const apiKey = "e1f9854a79mshacce72468e7cf33p1d5bb1jsna0dba16a5b1f"

export const getGames = () => {
  fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
    "method": "GET",
    "headers": {
      // "Content-Type": "application/json",
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
    }
  })
  .then((response) => response.json())
   .then((gamesdata) => {
     console.log(gamesdata.results)
     games = gamesdata.results
     console.log(games)
     let gamesContainer = document.querySelector("main")
     gamesContainer.innerHTML = `<h2>Games</h2><div class="game-container"><img src="${games[0].background_image}" height="200"><br><h3>${games[0].name}<br><h4>Genre:</h4><p>${games[0].genres[0].name}</p><p>${games[0].genres[1].name}</p></h3></div>`
   })
  
}
console.log(games)
export const useGames = () => games.slice()


