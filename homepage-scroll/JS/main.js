
// sidebar mobile
const blurBackground = function () {
  document.querySelector(".sidebar").style.boxShadow =
    "0px 0px 20px 5000px #00000094";
  document.querySelector(".container").style.pointerEvents = "none";
  document.querySelector(".mobile-header").style.pointerEvents = "none";
  document.querySelector(".mobile-nav-bar").style.pointerEvents = "none";
};
const removeBlurBackground = function () {
  document.querySelector(".sidebar").style.boxShadow = "none";
  document.querySelector(".container").style.pointerEvents = "auto";
  document.querySelector(".mobile-header").style.pointerEvents = "auto";
  document.querySelector(".mobile-nav-bar").style.pointerEvents = "auto";
};

// sidebar open
document
  .querySelector(".mobile-header .me-icon")
  .addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.left = 0;
    sidebar.style.top = 0;

    // blur background
    blurBackground();
  });

// sidebar close
document
  .querySelector(".container-wrap")
  .addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.left = "";
    sidebar.style.top = "";

    // unblur background
    removeBlurBackground();
  });

document.querySelector(".sidebar").addEventListener(
  "touchmove",
  function (e) {
    e.preventDefault();
  },
  false
);

document.querySelector(".sidebar .down").addEventListener("click", function () {
  this.classList.toggle("rotate-arrow");
});

document.querySelector(".expand-add-acc")
  .addEventListener("click", function () {
    document.querySelector(".all-uls").classList.toggle("show-add-acc");
  });




// on scroll hide header and bottom nav bar in mobile view
let scroll = 1;
let scrolldown = 1;
window.onscroll = function (e) {
  if (this.oldScroll > this.scrollY) {
    scroll++;
    scrolldown = 1;
    if (scroll > 20 || window.pageYOffset < 60) {
      //   scrolling down
      document.querySelector(".mobile-header").style.top = "0";
      document.querySelector(".mobile-nav-bar").style.bottom = "0";
      scroll = 1;
    }
  } else {
    //   scrolling up
    scrolldown++;
    scroll = 1;
    if (scrolldown > 20 && window.pageYOffset > 60) {
      document.querySelector(".mobile-header").style.top = "-52px";
      document.querySelector(".mobile-nav-bar").style.bottom = "-55px";
      scrolldown = 1;
    }
  }
  this.oldScroll = this.scrollY;
};



//Scroll Suggestions
const next_btn = document.querySelector(".next");
const previous_btn = document.querySelector(".previous");

const wrapper = document.querySelector(".suggestions-list");

let scrollMovePoint = 0;
const max_scroll = wrapper.scrollWidth;

function test(event) {
  let operand = 300;

  // Calculate the number to move.
  if (event.target.classList.contains("next")) {
    if (scrollMovePoint < max_scroll) {
      scrollMovePoint = scrollMovePoint + operand;
    }
  } else if (event.target.classList.contains("previous")) {
    if (0 < scrollMovePoint) {
      scrollMovePoint = scrollMovePoint - operand;
    }
  }

  // Move the scroll bar to the value.
  wrapper.scroll(scrollMovePoint, 0);
}
next_btn.addEventListener("click", test);
previous_btn.addEventListener("click", test);

//Scroll Story
const nxt_btn = document.querySelector(".nxt");
const prev_btn = document.querySelector(".prev");

const wrapperStory = document.querySelector(".scroll-stories");

let scrollStoryMovePoint = 0;
const maxStory_scroll = wrapperStory.scrollWidth;

function testStory(event) {
  let operandStory = 300;

  // Calculate the number to move.
  if (event.target.classList.contains("nxt")) {
    if (scrollStoryMovePoint < maxStory_scroll) {
      scrollStoryMovePoint = scrollStoryMovePoint + operandStory;
    }
  } else if (event.target.classList.contains("prev")) {
    if (0 < scrollStoryMovePoint) {
      scrollStoryMovePoint = scrollStoryMovePoint - operandStory;
    }
  }

  // Move the scroll bar to the value.
  wrapperStory.scroll(scrollStoryMovePoint, 0);
}
nxt_btn.addEventListener("click", testStory);
prev_btn.addEventListener("click", testStory);

let count=0;
let slideImage=document.getElementsByClassName('images-container');

let images=document.getElementsByClassName('slide-image');
let dots=document.getElementsByClassName('dot-slide');
function next(){
  images[count].classList.remove('slide-active');
  dots[count].classList.remove('slide-dot-active');
  if(count>=images.length-1){
    count=images.length-1;
  }else{
    count+=1;
  }
  images[count].classList.add('slide-active');
  dots[count].classList.add('slide-dot-active');
}
function prev(){
  images[count].classList.remove('slide-active');
  dots[count].classList.remove('slide-dot-active');
  if(count<=0){
    count=0;
  }else{
    count-=1;
  }
  images[count].classList.add('slide-active');
  dots[count].classList.add('slide-dot-active');
}
//Click
document.getElementsByClassName('images-container')[0].addEventListener('click',handleTouchMove);
//Swipe
document.getElementsByClassName('images-container')[0].addEventListener('touchstart', handleTouchStart, false);        
document.getElementsByClassName('images-container')[0].addEventListener('touchmove', handleTouchMove, false);

var x_Down = null;                                                        
var y_Down = null;

function getTouches(event) {
  return event.touches;
}                                                     
function is_touch_device() {  
  try {  
    document.createEvent("TouchEvent");  
    return true;  
  } catch (e) {  
    return false;  
  }  
}
function handleTouchStart(event) {
    const firstTouch = getTouches(event)[0];                                      
    x_Down = firstTouch.clientX;                                      
    y_Down = firstTouch.clientY;                                      
};                                                

function handleTouchMove(event) {
    if(!is_touch_device()){
      var x = event.clientX;
      if(x>620){
          next();
      }else{
         prev();
      }
    }else if ( ! x_Down || ! y_Down ) {
        return;
    }else if(is_touch_device && !getTouches(event)){
       var x = event.clientX;
        if(x>200){
            next();
        }else{
           prev();
        }
    }else{
        try{
          var x_up = event.touches[0].clientX;                                 
          var y_Up = event.touches[0].clientY;
        }
        catch(e){}
        var x_Diff = x_Down - x_up;
        var y_Diff = y_Down - y_Up;
        if ( Math.abs( x_Diff ) > Math.abs( y_Diff ) ) {
          if ( x_Diff > 0 ) {   
            next();//left
          } else {
            prev();
          }                       
        } 
      
      /* reset values */
        x_Down = null;
        y_Down = null;
        
       }   
};