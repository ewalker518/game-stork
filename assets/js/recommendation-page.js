// Google Map
// let map;
// let service;
// let infoWindow
// function initMap() {
//   const saltLake = new google.maps.LatLng(40.7608, 111.8910);
//   infoWindow = new google.maps.InfoWindow();
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: saltLake,
//     zoom: 12,
//   });
//   const request = {
//     query: "best buy", 
//     fields: ["name", "geometry"],
//   };
//   service = new google.maps.places.PlacesService(map);
//   service.findPlaceFromQuery(request, (results, status) => {
//     if (status === google.maps.places.PlacesServiceStatus.OK && results) {
//       for (let i = 0; i < results.length; i++) {
//         createMarker(results[i]);
//       }
//       map.setCenter(results[0].geometry.location);
//     }
//   });
  
// }


// function createMarker(place) {
//   if (!place.geometry || !place.geometry.location) return;
//   const marker = new google.maps.Marker({
//     map,
//     position: place.geometry.location,
//     Animation: google.maps.Animation.BOUNCE,
   
//   });
//   google.maps.event.addListener(marker, "click", () => {
//     infoWindow.setContent(place.name || "");
//     infoWindow.open(map, marker,);
//   });
// }
//Google Map

function getGame() {
  //get score from local storage
  var gameName = JSON.parse(window.localStorage.getItem("gameName")) || [];

  var gameContain = document.getElementById("game-container");

  gameContain.innerText = gameName
}

getGame();

//Option 1

/*pull from the local storage */
//https://stackoverflow.com/questions/60037063/how-to-save-scores-in-javascript-quiz
//https://www.youtube.com/watch?v=k8yJCeuP6I8

// var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));

// console log shows local storage "retrieved objects" values need to be changed to what jessie wants





//Option 2

//Local Storage From code quiz 

//function printgameNames() {
  //var gameNames = JSON.parse(window.localStorage.getItem("gameNames")) || [];
   //gameNames.sort(function(a, b) {
//return b.score - a.score;
   //});
   //gameNames.forEach(function(score) {
     //  var liTag = document.createElement("li");
      // liTag.textContent = score.initials + " - " + score.score;
      // var olEl = document.getElementById("gameNames");
      // olEl.appendChild(liTag);
  // });
//}

//function cleargameNames() {
  //window.localStorage.removeItem("gameNames")
  //window.location.reload();
//}
//document.getElementById("clear").onclick = cleargameNames;
//printgameNames();
