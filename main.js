let picOfDay = document.querySelector(".pic-Of-Day");
picOfDay.addEventListener("click", picOfTheDay);

function picOfTheDay() {

  fetchData();
  console.log("button is clicked");
}
async function fetchData() {
  try {
    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=PhnfsrWFDYqeVJcPZ5KAA0iNzEsWbnilLHuiME4N"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.title);
    return data;
  } catch (error) {
    console.error("There was a problem fetching the data:", error);
  }
}
