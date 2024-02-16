let firstInput = document.querySelector(".first");
let button = document.querySelector("button");
let secondInput = document.querySelector(".second");
let CheckBtn = document.querySelector(".secondBtn");
let endText = document.querySelector(".endText");

CheckBtn.addEventListener("click", e => {
  e.preventDefault();
  let inputVal = secondInput.value.split("").join("");
  if (inputVal == firstInput.innerText) {
    endText.innerText = " nice Captcha matched";
    endText.style.display = "block";
    endText.style.color = "#fff";
    setTimeout(() => {
      endText.innerText = "";
      endText.style.display = "";
      endText.style.color = "";
      getCaptcha();
    }, 4000);
  } else {
    endText.innerText = "Captcha not matched. Please Try Again Later";
    endText.style.display = "block";
    endText.style.color = "#000";
  }
});
function getCaptcha() {
  var chars =
    "0123456789qwertyuiopasdfghjklzxcvbnm!@#$%^&*()QWERTYUIOPASDFGHJKLZXCVBNM";
  var passwordLength = 12;
  var password = "";
  for (let i = 0; i <= passwordLength; i++) {
    var RandomPassword = Math.floor(Math.random() * chars.length);
    password += chars.substring(RandomPassword, RandomPassword + 1);
  }
  firstInput.innerText = password;
}
button.addEventListener("click", e => {
  firstInput.innerText = "";
  getCaptcha();
});
