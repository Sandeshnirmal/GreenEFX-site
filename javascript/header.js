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
