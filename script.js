const toggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");
toggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

const links = document.querySelectorAll(".nav-link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
  });
});

const form = document.querySelector("#contact form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Your message has been sent successfully!");
  form.reset();
});
