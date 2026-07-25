import { auth } from "./firebase.js";

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const btn = document.getElementById("loginBtn");

btn.onclick = () => {
  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      location.href = "index.html";
    })

    .catch((err) => {
      document.getElementById("error").innerHTML = err.message;
    });
};
