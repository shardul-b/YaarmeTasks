var elem = document.getElementsByClassName("see-more");
for(var i = 0; i < elem.length; i++){
    elem[i].onclick = function(){
        if(this.innerHTML === "see less"){
            this.previousSibling.style.display = "none";
            this.innerHTML = "... see more";
        }
        else{
            this.previousSibling.style.display = "inline";
            this.innerHTML = "see less";
        }
    }
}
// let menu_Button=document.getElementById('ham');
// let menu=document.getElementsByClassName('menu-side');
// menu_Button.addEventListener('click',()=>{
//     menu[0].classList.toggle('visible');
// });

// document.addEventListener("click",(event)=>{
//     if(menu[0].classList.contains('visible')){
//         if(!event.target.closest(".menu-side")  && !event.target.closest('#ham')){
//             menu[0].classList.toggle('visible');
//         }
//     }
// });
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
const commentDets={
    john:{
        comment:'This is my first comment',
        image:'CSS/Images/john.jpg',
        name:'John Doe',
        rank:'1st',
        description:'Full Stack Developer Amazon Inc.',
        time:'3h',
        reply:true,
        likes:3,
        replies_count:1,
        replies:[
            {
                name:'Niles Dhar',
                image:'CSS/Images/niles.jpg',
                comment:'My first too',
                time:'3h',
                description:'Data Scientist at ABC INC.',
                rank:'2nd',
                likes:3,
                replies_count:0
            }
        ]
    },
    kendrick:{
        comment:'That picture looks amazing!',
        image:'CSS/Images/kendrick.jpg',
        name:'Kendrick Lamar',
        rank:'2nd',
        description:'CEO at DarkArt',
        time:'4h',
        reply:true,
        likes:5,
        replies_count:2,
        replies:[
            {
                name:'Niles Dhar',
                image:'CSS/Images/niles.jpg',
                comment:`<span class="mention">Kendrick Lamar</span>same thoughts!`,
                time:'3h',
                description:'Data Scientist at ABC INC.',
                rank:'2nd',
                likes:3,
                replies_count:0
            },
            {
                name:'Elizabeth Lawrence',
                image:'CSS/Images/elizabeth.jpg',
                comment:'Agreed!',
                time:'2h',
                description:'Writer | Web Developer',
                rank:'1st',
                likes:2,
                replies_count:0
            },
        ]
    }
}
const comments=()=>{
    for(let i in commentDets){
        const container=creator('div');
        container.classList.add('comment-container');
        //Comment parent box
        const commenter=creator('div');
        commenter.classList.add('commenter','flex');
        //image
        const commenter_image_container=creator('div');
        commenter_image_container.classList.add('commenter-image-container');
        const commenter_image=creator('img');
        commenter_image.classList.add('commenter-image');
        commenter_image.setAttribute('src',commentDets[i]['image']);
        commenter_image_container.appendChild(commenter_image);
        commenter.appendChild(commenter_image_container);
        //comment details
        const comment_details=creator('div');
        comment_details.classList.add('comment-details','flexonly');
        //comment
        const comment=creator('div');
        comment.classList.add('comment');
        const comment_name_rank=creator('div');
        comment_name_rank.classList.add('comment-name-rank','flexonly');
        
        const comment_name=creator('div');
        comment_name.classList.add('comment-name');
        comment_name.innerHTML=commentDets[i]['name'];
        comment_name_rank.appendChild(comment_name);

        const name_dot= creator('span');
        name_dot.classList.add('name-dot');
        comment_name_rank.appendChild(name_dot);

        const comment_rank=creator('div');
        comment_rank.classList.add('comment-rank');
        comment_rank.innerHTML=commentDets[i]['rank'];
        comment_name_rank.appendChild(comment_rank);
        comment.appendChild(comment_name_rank);
        //Description
        const comment_description=creator('span');
        comment_description.classList.add('comment-description');
        comment_description.innerHTML=commentDets[i]['description'];
        comment.appendChild(comment_description);
        //Time
        const comment_time=creator('span');
        comment_time.classList.add('comment-time');
        comment_time.innerHTML=commentDets[i]['time'];
        comment.appendChild(comment_time);
        //Comment content
        const comment_comment=creator('span');
        comment_comment.classList.add('comment-comment','flexonly');
        comment_comment.innerHTML=commentDets[i]['comment'];
        comment.appendChild(comment_comment);

        comment_details.appendChild(comment);

        const dots_icon=creator('div');
        dots_icon.classList.add('dots-more-icon');
        comment_details.appendChild(dots_icon);

        commenter.appendChild(comment_details);
        
        container.appendChild(commenter);
        //Tray
        const icons_tray=creator('div');
        icons_tray.classList.add('comment-icons-tray','flexonly');
        //Like
        const like_section=creator('div');
        like_section.classList.add('like-section','flexonly');
        const like_icon=creator('span');
        like_icon.classList.add('comment-like-icon');
        like_section.appendChild(like_icon);
        //Dot
        const like_dot= creator('span');
        like_dot.classList.add('name-dot');
        like_section.appendChild(like_dot);
        //count
        if(commentDets[i]['likes']>0){
            const like_count= creator('span');
            like_count.classList.add('like-count');
            if(commentDets[i]['likes']>1){
                like_count.innerHTML=`${commentDets[i]['likes']} likes`;
            }
            else{
                like_count.innerHTML=`${commentDets[i]['likes']} like`;
            }
            like_section.appendChild(like_count);
        }
        icons_tray.appendChild(like_section);
        //Reply icon section
        const reply_section=creator('div');
        reply_section.classList.add('reply-section','flexonly');
        const reply_icon=creator('span');
        reply_icon.classList.add('comment-reply-icon');
        reply_section.appendChild(reply_icon);
        //Dot
        
        //count
        if(commentDets[i]['replies_count']>0){
            const reply_dot= creator('span');
            reply_dot.classList.add('name-dot');
            reply_section.appendChild(reply_dot);
            const reply_count= creator('span');
            reply_count.classList.add('reply-count');
            if(commentDets[i]['replies_count']>1){
                reply_count.innerHTML=`${commentDets[i]['replies_count']} replies`;
            }
            else{
                reply_count.innerHTML=`${commentDets[i]['replies_count']} reply`;
            }
            reply_section.appendChild(reply_count);
        }
        icons_tray.appendChild(reply_section);
        container.appendChild(icons_tray);
        if(i=='john'){
            const previous=creator('span');
            previous.classList.add('previous');
            previous.innerHTML="Show previous replies..."
            container.appendChild(previous);
        }
        if(commentDets[i]['reply']){
            for(let j of commentDets[i]['replies']){
                const replier=creator('div');
                replier.classList.add('replier','flexonly');
                //image
                const commenter_image_container=creator('div');
                commenter_image_container.classList.add('reply-image-container');
                const commenter_image=creator('img');
                commenter_image.classList.add('reply-image');
                commenter_image.setAttribute('src',j['image']);
                commenter_image_container.appendChild(commenter_image);
                replier.appendChild(commenter_image_container);

                const comment_details=creator('div');
                comment_details.classList.add('comment-details','flexonly');
                //comment
                const comment=creator('div');
                comment.classList.add('comment');
                const comment_name_rank=creator('div');
                comment_name_rank.classList.add('comment-name-rank','flexonly');
                
                const comment_name=creator('div');
                comment_name.classList.add('comment-name');
                comment_name.innerHTML=j['name'];
                comment_name_rank.appendChild(comment_name);

                const name_dot= creator('span');
                name_dot.classList.add('name-dot');
                comment_name_rank.appendChild(name_dot);

                const comment_rank=creator('div');
                comment_rank.classList.add('comment-rank');
                comment_rank.innerHTML=j['rank'];
                comment_name_rank.appendChild(comment_rank);
                comment.appendChild(comment_name_rank);
                //Description
                const comment_description=creator('span');
                comment_description.classList.add('comment-description');
                comment_description.innerHTML=j['description'];
                comment.appendChild(comment_description);
                //Time
                const comment_time=creator('span');
                comment_time.classList.add('comment-time');
                comment_time.innerHTML=j['time'];
                comment.appendChild(comment_time);
                //Comment content
                const comment_comment=creator('span');
                comment_comment.classList.add('comment-comment','flexonly');
                comment_comment.innerHTML=j['comment'];
                comment.appendChild(comment_comment);
                comment_details.appendChild(comment);

                const dots_icon=creator('div');
                dots_icon.classList.add('dots-more-icon');
                comment_details.appendChild(dots_icon);
                replier.appendChild(comment_details);
                container.appendChild(replier);
                //Tray
                const icons_tray=creator('div');
                icons_tray.classList.add('comment-icons-tray-reply','flexonly');
                //Like
                const like_section=creator('div');
                like_section.classList.add('like-section','flexonly');
                const like_icon=creator('span');
                like_icon.classList.add('comment-like-icon');
                like_section.appendChild(like_icon);
                //Dot
                const like_dot= creator('span');
                like_dot.classList.add('name-dot');
                like_section.appendChild(like_dot);
                //count
                if(j['likes']>0){
                    const like_count= creator('span');
                    like_count.classList.add('like-count');
                    if(j['likes']>1){
                        like_count.innerHTML=`${j['likes']} likes`;
                    }
                    else{
                        like_count.innerHTML=`${j['likes']} like`;
                    }
                    like_section.appendChild(like_count);
                }
                icons_tray.appendChild(like_section);
                //Reply icon section
                const reply_section=creator('div');
                reply_section.classList.add('reply-section','flexonly');
                const reply_icon=creator('span');
                reply_icon.classList.add('comment-reply-icon');
                reply_section.appendChild(reply_icon);
                //Dot
                
                //count
                if(j['replies_count']>0){
                    const reply_dot= creator('span');
                    reply_dot.classList.add('name-dot');
                    reply_section.appendChild(reply_dot);
                    const reply_count= creator('span');
                    reply_count.classList.add('reply-count');
                    if(j['replies_count']>1){
                        reply_count.innerHTML=`${j['replies_count']} replies`;
                    }
                    else{
                        reply_count.innerHTML=`${j['replies_count']} reply`;
                    }
                    reply_section.appendChild(reply_count);
                }
                icons_tray.appendChild(reply_section);
                container.appendChild(icons_tray);
            }
        }
        
        classes('comment-sub-container')[0].appendChild(container);
    }
}

(()=>{
    comments();
})();