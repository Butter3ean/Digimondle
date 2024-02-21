let board = document.getElementById("board");
let text = document.getElementById("digimon_tf").value;

const digimon_api = "https://digimon-api.vercel.app/api/digimon";

fetch(digimon_api)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
