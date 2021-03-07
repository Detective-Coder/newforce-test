let games = []

export const useGames = () => {
  return games.slice()
}

export const getGames = () => {
  fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
    "method": "GET",
    "headers": {
      "Content-Type": "application/json",
      "x-rapidapi-key": "e1f9854a79mshacce72468e7cf33p1d5bb1jsna0dba16a5b1f",
      "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
      
      // "API Key": "74a1e4d39ad641bdb76b9297ed66dd8b"
    }
  })
  .then(response => response.body)
  .then(rb => {
    const reader = rb.getReader();

    return new ReadableStream({
      start(controller) {
        // The following function handles each data chunk
        function push() {
          // "done" is a Boolean and value a "Uint8Array"
          reader.read().then( ({done, value}) => {
            // If there is no more data to read
            if (done) {
              console.log('done', done);
              controller.close();
              return;
            }
            // Get the data and send it to the browser via the controller
            controller.enqueue(value);
            // Check chunks by logging to the console
            console.log(done, value);
            push();
          })
        }

        push();
      }
    });
  })
  .then(stream => {
    // Respond with our stream
    return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
  })
  .then(result => {
    // Do things with result
    console.log(result);
    const gamesContainer = document.querySelector("main")
    


    gamesContainer.innerHTML = `<h2>Games</h2><div class="game-container">
    <section class="game-card">
      <div class="game-card__text">
        <p>Game ID: ${gameObject.id}</p>
        <p>${gameObject.title}</p>
      </div>
    </section>
    </div>`
  });
}


