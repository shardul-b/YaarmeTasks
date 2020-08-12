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
//Handles Id's
const ids=(val)=>{
    let value=document.getElementById(val);
    return value;
};
//Handles Classes
const classes=(val)=>{
    let values=document.getElementsByClassName(val);
    return values;
};
//Element Creation
const creator=(val)=>{
    let created=document.createElement(val);
    return created;
};
const events={
    view:{
        button:'SEE ALL VIEWS',
        desc:'<b>viewed your profile</b>'
    },
    job:{
        name:'YOUR JOB ALERT',
        button:'VIEW NEW JOBS',
        desc:'new job for',
        image:'CSS/Icons/search.svg'
    },
    news:{
        image:'CSS/Icons/news.svg'
    },
    birthday:{
        button:'SAY HAPPY BIRTHDAY',
        desc:`<b>a Happy Birthday</b>` 
    }
}
const notifs={
    google:{
        name:`${events['job']['name']}`,
        event:'job',
        image:`${events['job']['image']}`,
        desc:`Shardul Birje,1 ${events['job']['desc']} <b>Full Stack Developer</b> in <b>Mumbai</b>`,
        time:'12m',
        button:true
    },
    career:{
        event:'news',
        name:'DAILY RUNDOWN FRIDAY',
        desc:'How tech hiring will shape up, and other top news for you',
        time:'2h',
        image:`${events['news']['image']}`,
        button:false
    },
    john:{
        image:'CSS/Images/john.jpg',
        event:'view',
        desc:`John Doe ${events['view']['desc']}`,
        time:'3m',
        button:true
    },
    loss:{
        event:'post',
        time:'3h',
        desc:'Here’s how you can insure your career against potential job loss.',
        image:`${events['news']['image']}`,
        button:false
    },
    elizabeth:{
        image:'CSS/Images/elizabeth.jpg',
        event:'view',
        desc:`Elizabeth Lawrence your recent connection, recently <b>shared a post</b> you maybe interested in`,
        time:'5h',
        button:false
    },
    niles:{
        image:'CSS/Images/niles.jpg',
        event:'birthday',
        desc:`Wish Niles Dhar ${events['birthday']['desc']} (today)`,
        time:'5h',
        button:true
    },
    robin:{
        image:'CSS/Images/robin.jpg',
        event:'view',
        desc:`Robin Sharma your recent connection, recently <b>shared a post</b> you maybe interested in`,
        time:'5h',
        button:false
    },
    amazon:{
        name:`${events['job']['name']}`,
        event:'job',
        image:`${events['job']['image']}`,
        desc:`Shardul Birje,1 ${events['job']['desc']} <b>Full Stack Developer</b> in <b>Mumbai</b>`,
        time:'6m',
        button:true
    },
    
};
const notifCreator=()=>{
    for(let i in notifs){
        const notifContainer=creator('div');
        notifContainer.classList.add('notification-container');
        if(i=='john' || i=='google' || i=='career'){
            notifContainer.style.backgroundColor='#e6f7ff';
        }
        const container=creator('div');
        container.classList.add('container-notif','flex-space');

        const imageContainer=creator('div');
        imageContainer.classList.add('image-container');
        const image=creator('img');
        image.classList.add('image');
        image.setAttribute('src',notifs[i]['image']);
        imageContainer.appendChild(image);        
        container.appendChild(imageContainer);

        const detailsContainer=creator('div');
        detailsContainer.classList.add('details-container');
        const name_icon=creator('div')
        name_icon.classList.add('name-icon','flex-space');
        const iconSpan=creator('span');
        iconSpan.classList.add('dots-icon');
        // iconSpan.style.width='10%';
        if(notifs[i]['event']==='job' || notifs[i]['event']==='news'){
            const nameSpan=creator('span');
            nameSpan.classList.add('name-span');
            nameSpan.innerHTML=notifs[i]['name'];
            name_icon.appendChild(nameSpan);
        }else{
            imageContainer.style.alignSelf='center';
            // descSpan.style.alignSelf='center';
        }
        name_icon.appendChild(iconSpan);

        detailsContainer.appendChild(name_icon);
        const desc_time=creator('div');
        desc_time.classList.add('desc-time','flex-space');

        const descSpan=creator('span');
        descSpan.classList.add('desc-span');
        descSpan.innerHTML=notifs[i]['desc'];
        desc_time.appendChild(descSpan);
        if(notifs[i]['event']==='birthday' || notifs[i]['event']==='view'){
            image.style.borderRadius='50%';
        }
        const time=creator('span');
        time.classList.add('time');
        time.innerHTML=notifs[i]['time'];
        desc_time.appendChild(time);
        detailsContainer.appendChild(desc_time);

        if(notifs[i]['button']){
            const button=creator('button');
            button.classList.add('button');
            button.innerHTML=events[notifs[i]['event']]['button'];
            detailsContainer.appendChild(button);
        }
        container.appendChild(detailsContainer);
        notifContainer.appendChild(container);
        classes('notifications')[0].appendChild(notifContainer);
    }
}
window.onload=()=>notifCreator();