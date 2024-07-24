let myDropdown = document.getElementById("myDropdown");
let body = document.body;
let display = 0;
let screens = screen.width;
let list = document.getElementById("c_listing");

list.addEventListener("mouseover", function (event) {
  console.log(screens);
  if (screens >= 1000) {
    myDropdown.style.display = "block";
  }
});

myDropdown.addEventListener("mouseover", function (event) {
  console.log("on");
  myDropdown.style.display = "block";
  display = 1;
});

body.addEventListener("mouseout", function (event) {
  console.log("off");

  myDropdown.style.display = "none";
  display = 0;
});

// to show nav bar in mobile

let content = document.getElementById("navbar");
let showing = 0;

function toShow() {
  if (showing == 1 && screens <= 1000) {
    content.style.display = "none";
    showing = 0;
  } else {
    content.style.display = "block";
    showing = 1;
  }
}

const navbar = document.getElementById("header");

let prevScrollPos = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    navbar.style.display = "block";
  } else {
    // Scrolling down
    navbar.style.display = "none";
  }

  prevScrollPos = currentScrollPos;

  console.log("works");
});
