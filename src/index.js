import "./components/headerBarAdmin.js";
import "./components/addNewResto.js";
import "./components/editResto.js";
import "./components/footerBarAdmin.js";
import "./styles.css";

// Function to fetch dashboard data after successful login
async function fetchDashboard() {
  try {
    const response = await fetch(
      "https://api-project-psi-navy.vercel.app/users",
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch dashboard");
    }

    const data = await response.json();
    console.log(data); // Process the data as needed
  } catch (error) {
    console.error("Error fetching dashboard:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("loggedIn")) {
    window.location.href = "/login.html";
  } else {
    fetchDashboard();
  }
});
