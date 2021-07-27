//get api 
//pull specific paths for each genre and game
//append to page
//get questionGenre to match the genreArray
//append results to page


//gets api info into the console right now
function genreList() {

    var genreApi = "https://api.rawg.io/api/genres?key=63a5c26330c14fde8375dae993498847"

    fetch(genreApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var genreContainer = document.getElementById("game-container");

            var gameName = document.createElement("span");
            //results[2].games[0].name
            gameName.textContent = data.results[2].games[2].name;

            genreContainer.appendChild(gameName);
        });
}



genreList();