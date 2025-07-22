function showAnswer(response) {
  console.log(response);
}

let apiKey = "8590002d4163ob0d0at3864bcd25fb7b";
let prompt = "What are unique baby names for 2025";
let context = " Make sure to provide a clear and precise answer";
let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(url).then(showAnswer);
