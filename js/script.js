// Date
const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()


// Navbar
const navBtn = document.getElementById("nav-btn")
const closeBtn = document.getElementById("close-btn")
const sidebar = document.getElementById("sidebar")
navBtn.addEventListener("click", (e)=>{
sidebar.classList.add("show-sidebar")
})
closeBtn.addEventListener("click", (e)=>{
  sidebar.classList.remove("show-sidebar")
})

// add fixed class to navbar
const navbar = document.getElementById("nav")
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    sidebar.classList.remove("show-sidebar");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth"
    });
  });
});