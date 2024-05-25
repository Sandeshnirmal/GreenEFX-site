

// function responsive(e){

AOS.init();
let image1 = document.querySelector('#anime');
let image2 = document.querySelectorAll('#anime1');

document.addEventListener('mousemove', (e) =>{

  let x = (window.innerWidth / 2.5  - e.pageX) / 80;
  let y = (window.innerHeight / 2.5 - e.pageY) / 50;

  image1.style.transform = `rotateX(${-y}deg) rotateY(${-x}deg)`;
  
  [].forEach.call(image2, image2 =>{
      image2.style.transform = `translateY(${y}px) translateX(${x}px)`;
  });

});
al
// }

// var screen = document.matchMedia('(min-width: 600px)');

// responsive(screen);
// screen.addEventListener('change', responsive);


// to show and hide Dropdown 

let myDropdown = document.getElementById("myDropdown")
let display = 0;

function myFunction(){
  if(display == 1){
    myDropdown.style.display = "none";
    display = 0;
    myDropdown1.style.display = "none";
    display1 = 0;
  }
  else{
    myDropdown.style.display = "block";
    display = 1;
  }
}

let myDropdown1 = document.getElementById("myDropdown1")
let display1 = 0;

function myFunction1(){
  if(display1 == 1){
    myDropdown1.style.display = "none";
    display1 = 0;
  }
  else{
    myDropdown1.style.display = "block";
    display1 = 1;
  }
 
}

// to show nav bar in mobile

let content = document.getElementById("navbar");
let showing = 0;

let width = window.matchMedia.apply("(max-width: 1000px)");

function toShow(){
    if(showing == 1){
        content.style.display = "none";
        showing = 0; 
    }
    else{
        content.style.display = "block"; 
        showing = 1;
    }


}












