$(document).ready(function () {

  // $.get("https://swapi.co/api/people/3", console.log);

  // get random number in range, max is exclusive
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + min;
  }

  $("#get-photo").click(function () {
    // get a random photo
    const randomId = randomIntFromInterval(0, 5001);

    
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/photos/" + randomId,
      // our successHandler function will be executed with the returned data
      success: successHandler
    });   
  });

  function successHandler(photoData) {
    const $photoWrapper = $("#random-photo");

    for (const key in photoData) {
    
      if (key !== "thumbnailUrl" && key !== "url") {
        $photoWrapper.append(`<h3>${key}: ${photoData[key]}</h3>`);
      }
      else {
        $photoWrapper.append(`<img style="display: block" src=${photoData[key]}>`);
      }
    }
    
  }
}); // document ready