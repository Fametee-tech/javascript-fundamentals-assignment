// A for loop creates the numbers 1 through 5 when the page loads.
const countList = document.getElementById("count-list");

for (let number = 1; number <= 5; number++) {
  const listItem = document.createElement("li");
  listItem.textContent = number;
  countList.appendChild(listItem);
}

// This function runs when the user submits the form.
function displayGreeting(event) {
  event.preventDefault();

  const nameInput = document.getElementById("user-name");
  const ageInput = document.getElementById("user-age");
  const greetingOutput = document.getElementById("greeting-output");
  const errorMessage = document.getElementById("error-message");

  // Variables store the user's name and age.
  const userName = nameInput.value.trim();
  const userAge = Number(ageInput.value);

  greetingOutput.hidden = true;
  greetingOutput.classList.remove("is-not-adult");

  if (userName === "") {
    errorMessage.textContent = "Please enter your name to continue.";
    nameInput.focus();
    return;
  }

  if (
    ageInput.value.trim() === "" ||
    !Number.isFinite(userAge) ||
    !Number.isInteger(userAge) ||
    userAge < 0 ||
    userAge > 120
  ) {
    errorMessage.textContent = "Please enter a valid age between 0 and 120.";
    ageInput.focus();
    return;
  }

  errorMessage.textContent = "";

  // A condition checks whether the user is above 18 years old.
  let ageMessage;
  if (userAge > 18) {
    ageMessage = "You are above 18 years old.";
  } else {
    ageMessage = "You are not above 18 years old.";
    greetingOutput.classList.add("is-not-adult");
  }

  // Build the result with textContent to safely display the submitted name.
  greetingOutput.replaceChildren();

  const heading = document.createElement("h3");
  heading.textContent = `Hello, ${userName}!`;

  const greetingText = document.createElement("p");
  greetingText.textContent = "Welcome to my JavaScript Fundamentals assignment.";

  const ageText = document.createElement("p");
  ageText.className = "age-result";
  const ageLabel = document.createElement("span");
  ageLabel.className = "age-label";
  ageLabel.textContent = "Age check:";
  const ageResult = document.createElement("span");
  ageResult.textContent = ageMessage;
  ageText.append(ageLabel, ageResult);

  greetingOutput.append(heading, greetingText, ageText);
  greetingOutput.hidden = false;
}

// Clicking the form button triggers the greeting function.
document.getElementById("user-form").addEventListener("submit", displayGreeting);
