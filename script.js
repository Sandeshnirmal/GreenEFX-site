// function responsive(e){
AOS.init({
  disable: function () {
    var maxWidth = 1000;
    return window.innerWidth < maxWidth;
  },
});

// to show and hide Dropdown

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

let myDropdown1 = document.getElementById("myDropdown1");
let display1 = 0;

function myFunction1() {
  if (display1 == 1) {
    myDropdown1.style.display = "none";
    display1 = 0;
  } else {
    myDropdown1.style.display = "block";
    display1 = 1;
  }
}

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

// popup section

let pop = document.getElementById("popup1");
let displaying = 0;

function popup() {
  if (displaying == 1) {
    pop.style.display = "none";
    displaying = 0;
  } else {
    pop.style.display = "block";
    displaying = 1;
  }
}

var mainImage = document.getElementById("main_video");
var smallImage = document.getElementsByClassName("video_list");

smallImage[0].onclick = function () {
  mainImage.src = smallImage[0].src;
};
smallImage[1].onclick = function () {
  mainImage.src = smallImage[1].src;
};
smallImage[2].onclick = function () {
  mainImage.src = smallImage[2].src;
};
smallImage[3].onclick = function () {
  mainImage.src = smallImage[3].src;
};

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
