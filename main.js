let podBtn = document.querySelector(".pic-Of-Day");
podBtn.addEventListener("click", getPod);
let h2 = document.querySelector("h2");
let img = document.querySelector("img");

function getPod() {
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=PhnfsrWFDYqeVJcPZ5KAA0iNzEsWbnilLHuiME4N"
  )
    .then((res) => res.json())
    .then((data) => {
      h2.textContent = data.title;
      img.src = data.hdurl;
    });
}
