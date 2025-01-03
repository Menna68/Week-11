

let email = document.getElementById("emailBtn");
let password = document.getElementById("passwordBtn");
let loginBtn = document.getElementById("login-btn");
let storageUsers = JSON.parse(localStorage.getItem("users")) || [];

loginBtn.addEventListener("click", function () {
  var emailValue = email.value;
  var passwordValue = password.value;

  if (emailValue.length == 0 || passwordValue.length == 0) {
    getMessageValidation("All Inputs IS Required");
    return;
  }

  if (!validationAllBtn(email) || !validationAllBtn(password)) {
    return; 
  }

  let userFound = false;
  for (let user of storageUsers) {
    if (user.email === emailValue && user.password === passwordValue) {
      userFound = true;
      localStorage.setItem("currentUserName", user.userName);
      getMessageValidation("Login successful!", "text-success"); 
      setTimeout(function() {
        window.location = "./home.html";
      }, 1000);
      break;
    }
  }

  if (!userFound) {
    getMessageValidation("Incorrect email or password");
  }
});

function getMessageValidation(message, color = "text-danger") {
  const msgElement = document.getElementById("msgValidation");
  msgElement.innerHTML = message;
  msgElement.classList.remove("d-none", "text-danger", "text-success");
  msgElement.classList.add(color);
}

function validationAllBtn(element) {
  let regex = {
    emailBtn: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    passwordBtn: /^[A-Za-z0-9]{2,10}$/,
  };

  let text = element.value;
  if (regex[element.id].test(text)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true;
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    return false;
  }
}