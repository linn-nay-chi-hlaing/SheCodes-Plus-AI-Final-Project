function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context = `You are a world cuisine recipe expert. Your mission is to generate a simple and easy-to-follow recipe. Include the ingredients with quantities and short, step-by-step cooking instructions. Keep the recipe concise and beginner-friendly. Avoid long explanations. Separate each line with <br />. At the end of the recipe, write 'SheCodes AI' inside a <strong> element. Do NOT place 'SheCodes AI' at the beginning of the recipe.`;
  let prompt = `User instructions: Generate a world cuisine recipe for ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a world cuisine recipe for ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
