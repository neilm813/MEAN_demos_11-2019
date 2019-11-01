/* 
  - fetch uses promises
  - promises are a way for us to run some code after the promise is fulfilled without having to know when exactly it will be fulfilled / resolved
  - `fetch` is async, so you can't just write code after it with the assumption the fetch will have completed
    - `fetch` will start fetching, then the code below it will start running before `fetch` finishes
    - `fetch` returns a promise immediately (before it's fulfilled), then we can tell the promise what we want to happen when it is fulfilled
    - promises are the newer way of handling async returns instead of using callbacks (which can result in callback hell: many nested callbacks)
*/

document.getElementById('btnGet')
  .addEventListener('click', function (e) {

    fetch('https://swapi.co/api/people/' + randomIntFromInterval(1, 88 + 1) + '/')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        addHtml(data);
      })
      .catch(console.log);
  });

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + min;
}

function addHtml(personData) {

  // creates an actual html node rather than just a string
  const container = document.createElement("div");
  const filmsList = document.createElement("ul");

  // .appendChild does not accept a string, must be given a node
  // insertAdjacentHTML can be given a string
  container.insertAdjacentHTML('beforeend', `<h1>Name: ${personData.name}</h1>`);
  container.insertAdjacentHTML('beforeend', `<h1 style="font-size: 50px;">Massiveness: ${personData.mass}</h1>`);
  container.insertAdjacentHTML('beforeend', `<h1><u>Films:</u></h1>`);


  for (const filmUrl of personData.films) {
    fetch(filmUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (filmData) {

        filmsList.insertAdjacentHTML('beforeend', `<li>${filmData.title}</li>`);
        // need to use appendChild because filmsList is a node, not a string
        container.appendChild(filmsList);
      });
  }

  document.getElementById("data").innerHTML = "";
  document.getElementById("data").appendChild(container);
}