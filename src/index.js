function revealBabyName(response) {
  alert(response.data.answer);
}

function generateBabyName(event) {
  event.preventDefault();

  let genderInput = document.getElementsByName("gender");

  let apiKey = "8590002d4163ob0d0at3864bcd25fb7b";
  let prompt = `What are unique baby names for ${genderInput.value} gender`;
  let context =
    " You are a connoisseur in naming babies and pull from a rolodex of names from countries all over the world, only provide 4 options";
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(url).then(revealBabyName);
}

let babyGender = document.getElementsByName("#gender");
babyGender.addEventListener("submit", generateBabyName);
