function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function selectRole(role) {
  // Save selected role
  localStorage.setItem("userRole", role);

  // Redirect to login/signup page
  window.location.href = "login.html";
}
