// Grabbing necessary DOM elements
const accountButton = document.getElementById("account");
const passwordButton = document.getElementById("password");
const accountContent = document.getElementById("account_content");
const passwordContent = document.getElementById("password_content");

passwordButton.addEventListener("click", function (e) {
  passwordContent.style.display = "block";
  accountContent.style.display = "none";
  accountButton.style.backgroundColor = "#f4f4f5";
  passwordButton.style.backgroundColor = "#fff";
});

accountButton.addEventListener("click", function (e) {
  accountContent.style.display = "block";
  passwordContent.style.display = "none";
  passwordButton.style.backgroundColor = "#f4f4f5";
  accountButton.style.backgroundColor = "#fff";
});
