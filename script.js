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
let vid = document.getElementById("videos");

function popup() {
  if (displaying == 1) {
    pop.style.display = "none";
    displaying = 0;
    vid.muted = true;
    vid.autoplay = true;
  } else {
    pop.style.display = "block";
    displaying = 1;
    vid.muted = false;
    vid.autoplay = false;
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

// read more popup

let link1 = document.getElementById("r1");
let link2 = document.getElementById("r2");
let link3 = document.getElementById("r3");

let close1 = document.getElementById("close1");
let close2 = document.getElementById("close2");
let close3 = document.getElementById("close3");

let readmore1 = document.getElementById("d1");
let readmore2 = document.getElementById("d2");
let readmore3 = document.getElementById("d3");

function switchOn(e) {
  e.style.display = "block";
}

function switchOff(e) {
  e.style.display = "none";
}

link1.addEventListener("click", function (event) {
  console.log("readmore");
  switchOn(readmore1);
});

link2.addEventListener("click", function (event) {
  console.log("readmore");
  switchOn(readmore2);
});

link3.addEventListener("click", function (event) {
  console.log("readmore");
  switchOn(readmore3);
});

close1.addEventListener("click", function (event) {
  console.log("closed");
  switchOff(readmore1);
});

close2.addEventListener("click", function (event) {
  console.log("closed");
  switchOff(readmore2);
});

close3.addEventListener("click", function (event) {
  console.log("closed");
  switchOff(readmore3);
});

function videoslider(links) {
  document.querySelector(".slider").src = links;
}
