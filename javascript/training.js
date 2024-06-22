AOS.init();

const btns = document.querySelectorAll(".buttons");

const containers = document.querySelectorAll(".container");

containers.forEach((container, index) => {
  container.addEventListener("mouseover", function (event) {
    var clickedIndex = index + 1; // Adjust for 1-based indexing

    if (clickedIndex === 1) {
      var btn1 = document.getElementById("t1");
      var btn2 = document.getElementById("t2");
      var btn3 = document.getElementById("t3");
      var cnt1 = document.getElementById("dip1-p1");
      var cnt2 = document.getElementById("dip1-p2");
      var cnt3 = document.getElementById("dip1-p3");
      todisplay(btn1, btn2, btn3, cnt1, cnt2, cnt3);
    } else if (clickedIndex === 2) {
      var btn1 = document.getElementById("t4");
      var btn2 = document.getElementById("t5");
      var btn3 = document.getElementById("t6");
      var cnt1 = document.getElementById("dip2-p1");
      var cnt2 = document.getElementById("dip2-p2");
      var cnt3 = document.getElementById("dip2-p3");
      todisplay(btn1, btn2, btn3, cnt1, cnt2, cnt3);
    } else if (clickedIndex === 3) {
      var btn1 = document.getElementById("t7");
      var btn2 = document.getElementById("t8");
      var btn3 = document.getElementById("t9");
      var cnt1 = document.getElementById("dip3-p1");
      var cnt2 = document.getElementById("dip3-p2");
      var cnt3 = document.getElementById("dip3-p3");
      todisplay(btn1, btn2, btn3, cnt1, cnt2, cnt3);
    } else if (clickedIndex === 4) {
      var btn1 = document.getElementById("t10");
      var btn2 = document.getElementById("t11");
      var btn3 = document.getElementById("t12");
      var cnt1 = document.getElementById("dip4-p1");
      var cnt2 = document.getElementById("dip4-p2");
      var cnt3 = document.getElementById("dip4-p3");
      todisplay(btn1, btn2, btn3, cnt1, cnt2, cnt3);
    } else if (clickedIndex === 5) {
      var btn1 = document.getElementById("t13");
      var btn2 = document.getElementById("t14");
      var btn3 = document.getElementById("t15");
      var cnt1 = document.getElementById("dip5-p1");
      var cnt2 = document.getElementById("dip5-p2");
      var cnt3 = document.getElementById("dip5-p3");
      todisplay(btn1, btn2, btn3, cnt1, cnt2, cnt3);
    } else if (clickedIndex === 6) {
      var btn1 = document.getElementById("t16");
      var btn2 = document.getElementById("t17");
      var btn3 = document.getElementById("t18");
      var cnt1 = document.getElementById("dip6-p1");
      var cnt2 = document.getElementById("dip6-p2");
      var cnt3 = document.getElementById("dip6-p3");
      todisplay(btn1, btn2, btn3, cnt1, cnt2, cnt3);
    }
  });
});

function todisplay(btn1, btn2, btn3, cnt1, cnt2, cnt3) {
  btn1.addEventListener("click", function () {
    cnt1.style.display = "block";
    if (cnt1.style.display === "block") {
      cnt2.style.display = cnt3.style.display = "none";
      btn1.style.borderWidth = "1px";
      btn2.style.borderWidth = btn3.style.borderWidth = "0";

      btn1.style.backgroundColor = "white";
      btn2.style.backgroundColor = btn3.style.backgroundColor = "rgba(0,0,0,0)";
    }
  });

  btn2.addEventListener("click", function () {
    cnt2.style.display = "block";
    if (cnt2.style.display === "block") {
      cnt1.style.display = cnt3.style.display = "none";
      btn1.style.borderWidth = btn3.style.borderWidth = "0";
      btn2.style.borderWidth = "1px";
      btn2.style.backgroundColor = "white";
      btn1.style.backgroundColor = btn3.style.backgroundColor = "rgba(0,0,0,0)";
    }
  });

  btn3.addEventListener("click", function () {
    cnt3.style.display = "block";
    if (cnt3.style.display === "block") {
      cnt2.style.display = cnt1.style.display = "none";
      btn3.style.borderWidth = "1px";
      btn2.style.borderWidth = btn1.style.borderWidth = "0";
      btn3.style.backgroundColor = "white";
      btn2.style.backgroundColor = btn1.style.backgroundColor = "rgba(0,0,0,0)";
    }
  });
}

let nextButton = document.getElementById("next_btn");
let prvButton = document.getElementById("prv_btn");
// let section = document.querySelectorAll('.section');

const slides = document.querySelectorAll(".section");
let index = 0;

function prevSlide() {
  slides[index].classList.remove("active");
  index--;

  if (index < 0) index = slides.length - 1;

  slides[index].classList.add("active");
}

prvButton.addEventListener("click", (e) => {
  prevSlide();
});

function nextSlide() {
  slides[index].classList.remove("active");
  index++;

  if (index > slides.length - 1) index = 0;

  slides[index].classList.add("active");
}

nextButton.addEventListener("click", (e) => {
  nextSlide();
});
