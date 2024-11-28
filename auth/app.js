
import { auth,signInWithEmailAndPassword } from "../utils/utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const goToCreateAccount = document.getElementById("goToCreateAccount");
  const goToSignIn = document.getElementById("goToSignIn");
  const signup_container = document.getElementById("signup_container");
  const login_container = document.getElementById("login_container");
  const signin_form = document.getElementById("signin_form");

  goToCreateAccount.addEventListener("click", (e) => {
    e.preventDefault();
    signup_container.style.display = "block";
    login_container.style.display = "none";
  });

  goToSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    signup_container.style.display = "none";
    login_container.style.display = "block";
  });

  signin_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    const email = e.target[0].value;
    const password = e.target[1].value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Login successful");
        window.location.href = "/";
        submitButton.disabled = false;
      })
      .catch((err) => {
        alert(err.message);
        submitButton.disabled = false;
      });
  });
});
