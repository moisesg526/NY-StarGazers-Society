let h2 = document.querySelector("h2");
let p = document.querySelector("p");
let podBtn = document.querySelector(".pod-btn");
let img = document.querySelector("img");

podBtn.addEventListener("click", getPod);

function getPod() {
  let date = document.querySelector(".get-Pod").value;

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=PhnfsrWFDYqeVJcPZ5KAA0iNzEsWbnilLHuiME4N&date=${date}`
  )
    .then((res) => res.json())
    .then((data) => {
      h2.textContent = data.title;
      img.src = data.hdurl;
      img.alt = data.title;
      p.textContent = data.explanation;
    })
    .catch((error) => console.error("Error fetching data:", error));
}
