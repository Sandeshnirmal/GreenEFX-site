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


//   carusel

const cardsContainer = document.querySelector(".card-carousel");
const cardsController = document.querySelector(".card-carousel + .card-controller")

class DraggingEvent {
  constructor(target = undefined) {
    this.target = target;
  }
  
  event(callback) {
    let handler;
    
    this.target.addEventListener("mousedown", e => {
      e.preventDefault()
      
      handler = callback(e)
      
      window.addEventListener("mousemove", handler)
      
      document.addEventListener("mouseleave", clearDraggingEvent)
      
      window.addEventListener("mouseup", clearDraggingEvent)
      
      function clearDraggingEvent() {
        window.removeEventListener("mousemove", handler)
        window.removeEventListener("mouseup", clearDraggingEvent)
      
        document.removeEventListener("mouseleave", clearDraggingEvent)
        
        handler(null)
      }
    })
    
    this.target.addEventListener("touchstart", e => {
      handler = callback(e)
      
      window.addEventListener("touchmove", handler)
      
      window.addEventListener("touchend", clearDraggingEvent)
      
      document.body.addEventListener("mouseleave", clearDraggingEvent)
      
      function clearDraggingEvent() {
        window.removeEventListener("touchmove", handler)
        window.removeEventListener("touchend", clearDraggingEvent)
        
        handler(null)
      }
    })
  }
  
  // Get the distance that the user has dragged
  getDistance(callback) {
    function distanceInit(e1) {
      let startingX, startingY;
      
      if ("touches" in e1) {
        startingX = e1.touches[0].clientX
        startingY = e1.touches[0].clientY
      } else {
        startingX = e1.clientX
        startingY = e1.clientY
      }
      

      return function(e2) {
        if (e2 === null) {
          return callback(null)
        } else {
          
          if ("touches" in e2) {
            return callback({
              x: e2.touches[0].clientX - startingX,
              y: e2.touches[0].clientY - startingY
            })
          } else {
            return callback({
              x: e2.clientX - startingX,
              y: e2.clientY - startingY
            })
          }
        }
      }
    }
    
    this.event(distanceInit)
  }
}


class CardCarousel extends DraggingEvent {
  constructor(container, controller = undefined) {
    super(container)
    
    // DOM elements
    this.container = container
    this.controllerElement = controller
    this.cards = container.querySelectorAll(".card")
    

    this.leftArrow = container.querySelector(".left-arrow");
    this.rightArrow = container.querySelector(".right-arrow");
  
    // Initialize arrow button functionality
    this.leftArrow.addEventListener("click", () => this.moveLeft());
    this.rightArrow.addEventListener("click", () => this.moveRight());

    
    // Carousel data
    this.centerIndex = (this.cards.length - 1) / 2;
    this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100;
    this.xScale = {};
    
    // Resizing
    window.addEventListener("resize", this.updateCardWidth.bind(this))
    
    if (this.controllerElement) {
      this.controllerElement.addEventListener("keydown", this.controller.bind(this))      
    }

    
    // Initializers
    this.build()
    
    // Bind dragging event
    super.getDistance(this.moveCards.bind(this))
    
  }
  moveLeft() {
    const temp = { ...this.xScale };
    for (let x in this.xScale) {
      const newX = (parseInt(x) - 1 < -this.centerIndex) ? this.centerIndex : parseInt(x) - 1;
      temp[newX] = this.xScale[x];
    }
    this.xScale = temp;
    this.updateCarousel();
  }
  
  moveRight() {
    const temp = { ...this.xScale };
    for (let x in this.xScale) {
      const newX = (parseInt(x) + 1 > this.centerIndex) ? -this.centerIndex : parseInt(x) + 1;
      temp[newX] = this.xScale[x];
    }
    this.xScale = temp;
    this.updateCarousel();
  }
  
  updateCarousel() {
    for (let x in this.xScale) {
      const scale = this.calcScale(x),
            scale2 = this.calcScale2(x),
            leftPos = this.calcPos(x, scale2),
            zIndex = -Math.abs(x);
  
      this.updateCards(this.xScale[x], {
        x: x,
        scale: scale,
        leftPos: leftPos,
        zIndex: zIndex
      });
    }
  }
  
  
  updateCardWidth() {
    this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100
    
    this.build()
  }
  
  build(fix = 0) {
    for (let i = 0; i < this.cards.length; i++) {
      const x = i - this.centerIndex;
      const scale = this.calcScale(x)
      const scale2 = this.calcScale2(x)
      const zIndex = -(Math.abs(i - this.centerIndex))
      
      const leftPos = this.calcPos(x, scale2)
     
      
      this.xScale[x] = this.cards[i]
      
      this.updateCards(this.cards[i], {
        x: x,
        scale: scale,
        leftPos: leftPos,
        zIndex: zIndex
      })
    }
  }
  
  
  controller(e) {
    const temp = {...this.xScale};
      
      if (e.keyCode === 39) {
        // Left arrow
        for (let x in this.xScale) {
          const newX = (parseInt(x) - 1 < -this.centerIndex) ? this.centerIndex : parseInt(x) - 1;

          temp[newX] = this.xScale[x]
        }
      }
      
      if (e.keyCode == 37) {
        // Right arrow
        for (let x in this.xScale) {
          const newX = (parseInt(x) + 1 > this.centerIndex) ? -this.centerIndex : parseInt(x) + 1;

          temp[newX] = this.xScale[x]
        }
      }
      
      this.xScale = temp;
      
      for (let x in temp) {
        const scale = this.calcScale(x),
              scale2 = this.calcScale2(x),
              leftPos = this.calcPos(x, scale2),
              zIndex = -Math.abs(x)

        this.updateCards(this.xScale[x], {
          x: x,
          scale: scale,
          leftPos: leftPos,
          zIndex: zIndex
        })
      }
  }
  
  calcPos(x, scale) {
    let formula;
    
    if (x < 0) {
      formula = (scale * 100 - this.cardWidth) / 2
      
      return formula

    } else if (x > 0) {
      formula = 100 - (scale * 100 + this.cardWidth) / 2
      
      return formula
    } else {
      formula = 100 - (scale * 100 + this.cardWidth) / 2
      
      return formula
    }
  }
  
  updateCards(card, data) {
    if (data.x || data.x == 0) {
      card.setAttribute("data-x", data.x)
    }
    
    if (data.scale || data.scale == 0) {
      card.style.transform = `scale(${data.scale})`

      if (data.scale == 0) {
        card.style.opacity = data.scale
      } else {
        card.style.opacity = 1;
      }
    }
   
    if (data.leftPos) {
      card.style.left = `${data.leftPos}%`        
    }
    
    if (data.zIndex || data.zIndex == 0) {
      if (data.zIndex == 0) {
        card.classList.add("highlight")
      } else {
        card.classList.remove("highlight")
      }
      
      card.style.zIndex = data.zIndex  
    }
  }
  
  calcScale2(x) {
    let formula;
   
    if (x <= 0) {
      formula = 1 - -1 / 5 * x
      
      return formula
    } else if (x > 0) {
      formula = 1 - 1 / 5 * x
      
      return formula
    }
  }
  
  calcScale(x) {
    const formula = 1 - 1 / 5 * Math.pow(x, 2)
    
    if (formula <= 0) {
      return 0 
    } else {
      return formula      
    }
  }
  
  checkOrdering(card, x, xDist) {    
    const original = parseInt(card.dataset.x)
    const rounded = Math.round(xDist)
    let newX = x
    
    if (x !== x + rounded) {
      if (x + rounded > original) {
        if (x + rounded > this.centerIndex) {
          
          newX = ((x + rounded - 1) - this.centerIndex) - rounded + -this.centerIndex
        }
      } else if (x + rounded < original) {
        if (x + rounded < -this.centerIndex) {
          
          newX = ((x + rounded + 1) + this.centerIndex) - rounded + this.centerIndex
        }
      }
      
      this.xScale[newX + rounded] = card;
    }
    
    const temp = -Math.abs(newX + rounded)
    
    this.updateCards(card, {zIndex: temp})

    return newX;
  }
  
  moveCards(data) {
    let xDist;
    
    if (data != null) {
      this.container.classList.remove("smooth-return")
      xDist = data.x / 250;
    } else {

      
      this.container.classList.add("smooth-return")
      xDist = 0;

      for (let x in this.xScale) {
        this.updateCards(this.xScale[x], {
          x: x,
          zIndex: Math.abs(Math.abs(x) - this.centerIndex)
        })
      }
    }

    for (let i = 0; i < this.cards.length; i++) {
      const x = this.checkOrdering(this.cards[i], parseInt(this.cards[i].dataset.x), xDist),
            scale = this.calcScale(x + xDist),
            scale2 = this.calcScale2(x + xDist),
            leftPos = this.calcPos(x + xDist, scale2)
      
      
      this.updateCards(this.cards[i], {
        scale: scale,
        leftPos: leftPos
      })
    }
  }
}

const carousel = new CardCarousel(cardsContainer)

const iframe = document.getElementById('video-car');
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  const video = iframeDoc.querySelector('videos');
  video.muted = true;