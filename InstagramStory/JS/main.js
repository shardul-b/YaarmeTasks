var elem = document.getElementsByClassName("content");
for (var i = 0; i < elem.length; i++) {


    console.log(elem[i].innerHTML.length);
    if (elem[i].innerHTML.length > 700) {
        // elem[i].innerHTML  = "length";
    }
    // elem[i].onclick = function(){
    //     if(this.innerHTML === "see less"){
    //         this.previousSibling.style.display = "none";
    //         this.innerHTML = "... see more";
    //     }
    //     else{
    //         this.previousSibling.style.display = "inline";
    //         this.innerHTML = "see less";
    //     }
    // }
}

var blurBackground = function () {
    document.querySelector(".sidebar").style.boxShadow = '0px 0px 20px 5000px #00000094';
    document.querySelector(".container").style.pointerEvents = 'none';
    document.querySelector(".mobile-header").style.pointerEvents = 'none';
    document.querySelector(".mobile-nav-bar").style.pointerEvents = 'none';
}
var removeBlurBackground = function () {
    document.querySelector(".sidebar").style.boxShadow = 'none';
    document.querySelector(".container").style.pointerEvents = 'auto';
    document.querySelector(".mobile-header").style.pointerEvents = 'auto';
    document.querySelector(".mobile-nav-bar").style.pointerEvents = 'auto';
}


// sidebar open
document.querySelector(".mobile-header .me-icon").addEventListener("click", function () {
    var sidebar = document.querySelector(".sidebar")
    sidebar.style.left = 0;
    sidebar.style.top = 0;

    // blur background
    blurBackground();
})

// sidebar close
document.querySelector(".container-wrap").addEventListener("click", function () {
    var sidebar = document.querySelector(".sidebar")
    sidebar.style.left = "";
    sidebar.style.top = "";

    // unblur background
    removeBlurBackground();
})


document.querySelector('.sidebar').addEventListener('touchmove', function (e) {
    e.preventDefault();
}, false);

document.querySelector(".sidebar .down").addEventListener("click", function () {
    this.classList.toggle("rotate-arrow")
})

document.querySelector(".expand-add-acc").addEventListener("click", function () {
    document.querySelector(".all-uls").classList.toggle("show-add-acc")
})

var sidebar = document.querySelector(".sidebar");

// document.querySelector("body").addEventListener("touchstart", startTouch, false);
// document.querySelector("body").addEventListener("touchmove", moveTouch, false);
// document.querySelector(".sidebar").addEventListener("touchmove", moveTouch2, false);

// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;

function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
};

function moveTouch(e) {
    if (initialX === null) {
        return;
    }

    if (initialY === null) {
        return;
    }

    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;

    var diffX = initialX - currentX;
    var diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
            // swiped left
            sidebar.style.left = "";
            sidebar.style.top = "";
            //un blur background
            removeBlurBackground();
        } else {
            // swiped right
            sidebar.style.left = 0;
            sidebar.style.top = 0;

            // blur background
            blurBackground();
        }
    } else {
        // sliding vertically
        if (diffY > 0) {
            // swiped up
        } else {
            // swiped down
        }
    }

    initialX = null;
    initialY = null;

};

function moveTouch2(e) {
    if (initialX === null) {
        return;
    }

    if (initialY === null) {
        return;
    }

    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;

    var diffX = initialX - currentX;
    var diffY = initialY - currentY;


    if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
            // swiped left
            sidebar.style.left = "";
            sidebar.style.top = "";

            //un blur background
            removeBlurBackground();
        } else {
            // swiped right
            sidebar.style.left = 0;
            sidebar.style.top = 0;

            // blur background

            blurBackground();
        }
    } else {

        // sliding vertically
        if (diffY > 0) {
            // swiped up
            // alert('asdas')
            sidebar.scroll({
                top: 500,
                // left: 100,
                behavior: 'smooth'
            })
            console.log("swiped up");
        } else {
            // swiped down
            sidebar.scroll({
                top: -100,
                // left: 100,
                behavior: 'smooth'
            })
        }

    }
    initialX = null;
    initialY = null;

    e.preventDefault();
}

var scroll = 1;
var scrolldown = 1;
window.onscroll = function (e) {
      console.log(scroll+'and'+window.pageYOffset +'or'+scrolldown);
    if (this.oldScroll > this.scrollY) {
        scroll++;
        scrolldown = 1;
        if(scroll>20 || window.pageYOffset<60){
        //   scrolling down
        document.querySelector('.mobile-header').style.top = '0';
        document.querySelector('.mobile-nav-bar').style.bottom = '0';
        scroll = 1;
           
        }
       
    } else {
        //   scrolling up
        scrolldown++;
        scroll = 1;
         if(scrolldown>20 && window.pageYOffset>60){
        document.querySelector('.mobile-header').style.top = '-52px';
        document.querySelector('.mobile-nav-bar').style.bottom = '-55px';
         scrolldown = 1;
          
         }
    }
    this.oldScroll = this.scrollY;
}
const storyObj={
    my:{
        name:'Your Story',
        image:'./CSS/Images/my.jpg'
    },
    john:{
        name:'john_doe',
        image:'./CSS/Images/john.jpg'
    },
    niles:{
        name:'niles11',
        image:'./CSS/Images/niles.jpg'
    },
    champaqnepapi:{
        name:'champaqnepapi',
        image:'./CSS/Images/drake.jpg'
    },
    shawn:{
        name:'shawn_mendes',
        image:'./CSS/Images/shawn.jpg'
    },
    robin:{
        name:'robinsharma11',
        image:'./CSS/Images/robin.jpg'
    }
}; 
// Stories
const stories=()=>{
    var storyContainer=document.getElementsByClassName('story-subContainer');
    for (var i in storyObj) {
        var imageDiv=document.createElement("div");
        imageDiv.classList.add('image-div');
        var div = document.createElement("div");
        div.classList.add('story-img');
        var subDiv= document.createElement("div");
        div.appendChild(subDiv);
        var img= document.createElement("img"); 
        subDiv.appendChild(img);
        
        subDiv.classList.add('img-container');
        img.setAttribute('class','story-image-in');
        img.setAttribute('alt','Images');
        img.setAttribute('src',storyObj[i]['image']);
        var nameDiv=document.createElement("span");
        nameDiv.classList.add('name-div');
        nameDiv.innerHTML=storyObj[i]['name'];
        imageDiv.appendChild(div);
        imageDiv.appendChild(nameDiv);
        storyContainer[0].appendChild(imageDiv); 
        if(i==='my'){
            div.classList.add('my');
            let plus=document.createElement('span')
            plus.classList.add('plus');
            // plus.innerHTML='+';
            subDiv.appendChild(plus);
            nameDiv.classList.add('my');

        }
    }
}
const suggestedObj={
    taylor:{
        image:'./CSS/Images/taylor.jpg',
        name:'Taylor Swift',
        description:'Follows you',
        you:true,
    },
    adam:{
        image:'./CSS/Images/adam.jpg',
        name:'Adam Richfield',
        description:'Followed by abc123 and 45 more',
        you:false,  
    },
    elizabeth:{
        image:'./CSS/Images/elizabeth.jpg',
        name:'Elizabeth Lawrence',
        description:'Followed by john_doe and 15 more',
        you:false, 
    },
    kendrick:{
        image:'./CSS/Images/kendrick.jpg',
        name:'Kendrick Lamar',
        description:'Follows you',
        you:true,
    },
    drake:{
        image:'./CSS/Images/drake.jpg',
        name:'champaqnepapi',
        description:'Follows you',
        you:true,
    },
    jason:{
        image:'./CSS/Images/jason.jpg',
        name:'deckard_shaw',
        description:'Followed by brian_o_conner and 9 others',
        you:false,
    }
}
const suggested=()=>{
    var suggestedBox=document.getElementsByClassName('suggested-box');
    for(let i in suggestedObj){
        let suggestedCard=document.createElement('div');
        suggestedCard.classList.add('suggested-card');
        let suggest_container=document.createElement('div');
        suggest_container.classList.add('suggest-container');
        suggestedCard.appendChild(suggest_container);
        //Cross
        let cross_div=document.createElement('div');
        cross_div.classList.add('cross-div');
        // cross_div.innerHTML='X';
        suggest_container.appendChild(cross_div);
        //Images
        let image_container=document.createElement('div');
        image_container.classList.add('suggest-image-container');
        let suggest_image=document.createElement('img');
        suggest_image.classList.add('suggest-image');
        suggest_image.setAttribute('src',suggestedObj[i]['image']);
        image_container.appendChild(suggest_image);
        suggest_container.appendChild(image_container);
        //name
        let suggest_name=document.createElement('span');
        suggest_name.classList.add('suggest-name');
        suggest_name.innerHTML=suggestedObj[i]['name'];
        suggest_container.appendChild(suggest_name);
        //description
        let suggest_desc=document.createElement('span');
        suggest_desc.classList.add('suggest-desc');
        suggest_desc.innerHTML=suggestedObj[i]['description'];
        suggest_container.appendChild(suggest_desc);
        //Button
        let follow_button=document.createElement('button');
        follow_button.classList.add('follow-button');
        if(suggestedObj[i]['you']){
            follow_button.innerHTML='Follow Back';
        }else{
            follow_button.innerHTML='Follow';
        }
        suggest_container.appendChild(follow_button);
        suggestedBox[0].appendChild(suggestedCard);
    }
}
window.onload=()=>{
    stories();
    suggested();
}