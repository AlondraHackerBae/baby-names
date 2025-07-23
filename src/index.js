function showAnswer(response) {
  alert(response.data.answer);
}

function revealGender(event) {
  event.preventDefault();
  console.log("finding names...");
}

let genderInput = document.querySelector("#gender");
let apiKey = "8590002d4163ob0d0at3864bcd25fb7b";
let prompt = `What are unique baby names for ${genderInput} gender`;
let context =
  " You are a connoisseur in naming babies and pull from a rolodex of names from countries all over the world";
let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(url).then(showAnswer);
