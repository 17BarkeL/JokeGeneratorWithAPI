var jokeElement = document.querySelector("#joke");

document.onload = newJoke();

async function newJoke() {
  await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&type=single")
    .then((response) => response.json())
    .then((data) => (jokeElement.innerText = data.joke));
}
