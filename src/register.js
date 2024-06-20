import "./style-loginreg.css";
import foodLoginImg from "../img/food-login.jpeg";

// Logika untuk halaman register
document.addEventListener("DOMContentLoaded", () => {
  const imgElement = document.querySelector(".register-right img");
  if (imgElement) {
    imgElement.src = foodLoginImg;
  }
});
