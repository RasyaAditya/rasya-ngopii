// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// kerika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar untuk menghilangkan nav
const hamburger = document.querySelector("#humburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
