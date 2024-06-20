import "./style-loginreg.css";
import foodLoginImg from "../img/food-login.jpeg";

// Logika untuk halaman login
document.addEventListener("DOMContentLoaded", () => {
  const imgElement = document.querySelector(".login-right img");
  if (imgElement) {
    imgElement.src = foodLoginImg;
  }
});
