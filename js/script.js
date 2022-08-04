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
const topScroll = document.querySelector(".top-link")
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset 
  const navbarHeight = navbar.getBoundingClientRect().height
  
  

  if (scrollHeight > navbarHeight) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
  if(scrollHeight > 500){
    topScroll.classList.add("show-toplink")
  }
  else{
    topScroll.classList.remove("show-toplink")
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