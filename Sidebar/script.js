window.onload=()=>{
	posts_creator();
}
const ids=(val)=>{
	let value=document.getElementById(val);
	return value;
};
const classes=(val)=>{
	let values=document.getElementsByClassName(val);
	return values;
};
const creator=(val)=>{
	let created=document.createElement(val);
	return created;
};
let posts={
	'linkedin-marketing':{
		'people-update':'<b>Kaushik Mishra</b>, <b>Ayush Jain</b> and 272 other connections follow <b>LinkedIn Marketing Solutions</b>',
		'profile':'assests/linkedin.png',
		'profile-name':'LinkedIn Marketing Solutions',
		'profile-description':'4,259,248 followers',
		'time':'Promoted',
		'description':'Leverage your LinkedIn page to it\'s full potential.Boost engagement of a post with $50 in free LinkedIn ad credits' ,
		'image':'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
		'link-desc':'<b>B2B Advertising Promo | LinkedIn Marketing Solutions</b>',
		'link':'business.linkedin.com',
		'reactions':'18,266',
		'comments':'527 comments',
	},
	'john-doe':{
		'people-update':'<b>Alan Page</b> Likes this',
		'profile':'https://images.unsplash.com/photo-1571929232190-30f765788262?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
		'profile-name':'John Doe',
		'profile-description':'Full Stack Developer|Self Learner|Speaker',
		'time':'3d',
		'description':'Just Completed learning JavaScript..It was an awesome experience',
		'image':'assests/js.png',
		'link':'none',
		'reactions':'36',
		'comments':'19 comments',
	},
	'robin-sharma':{
		'people-update':'<b>Rahul Singh</b> and 299 others like this',
		'profile':'assests/robin.jpg',
		'profile-name':'Robin Sharma',
		'profile-description':'Leadership Missionary, Humanitarian and Bestselling Author',
		'time':'1h',
		'description':'<b>Change</b>',
		'image':'assests/robinpost.png',
		'link':'none',
		'reactions':'50,000',
		'comments':'2000 comments',
	},
	'alex-lyndel':{
		'people-update':'<b>Rohit Kumar</b> Loves this',
		'profile':'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
		'profile-name':'Alex Lyndel',
		'profile-description':'Founder and CEO of Alex and co.',
		'time':'5d',
		'description':'Good vision helps you perform well—at home, at work, or behind the wheel. That’s why it’s important to take a few simple steps to make sure you help keep your eyesight at its best. A regular eye exam is the best way to protect your eyesight – and an easy precaution to take. Here are some tips to help maintain eye health as you age.',
		'image':'https://images.unsplash.com/photo-1529259491550-3eeaa2780bfa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
		'link-desc':'Tips for healthy eyes',
		'link':'https://www.bausch.com/vision-and-age/20s-and-30s-eyes/healthy-eyes',
		'reactions':'100',
		'comments':'50 comments',
	},
	'isabella-lawrence':{
		'people-update':'<b>Adam Levine</b> Celebrates this',
		'profile':'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
		'profile-name':'Isabella Lawrence',
		'profile-description':'Manager at Linkedin',
		'time':'1d',
		'description':'Joined LinkedIn a week ago. Already having a great experience at work,Thank you LinkedIN',
		'image':'assests/linkbuilding.jpg',
		'link':'none',
		'reactions':'44,500',
		'comments':'5000 comments',
	}
};
function posts_creator(){
	let postsContainer=classes('post-container');
	// let length=Object.keys(posts).length;
	for(let i in posts){
		//postbox-post parent
		let post_box=creator('div'); 
		post_box.classList.add('post-box');
		postsContainer[0].appendChild(post_box);

		//connections activity div
		let activity=creator('div');
		activity.classList.add('activity');
		//container
		let container=creator('div');
		container.classList.add('container','activity-container');
		let activity_descriptions=creator('span');
		let arrow=creator('span');
		activity_descriptions.innerHTML=posts[i]['people-update'];
		
		container.appendChild(activity_descriptions);
		container.appendChild(arrow);
		activity.appendChild(container);
		post_box.appendChild(activity);

		//profile details
		let post_profile=creator('div');
		post_profile.classList.add('container','flexonly','profile-details');
		//profile image container
		let post_profile_image=creator('div');
		post_profile_image.classList.add('poster-container');
		//image
		let profile_img=creator('img');
		profile_img.classList.add('poster-img');
		profile_img.setAttribute('src',posts[i]['profile']);
		//details
		let details=creator('div');
		details.classList.add('details');
		//name
		let name=creator('span');
		name.classList.add('name');
		name.innerHTML=posts[i]['profile-name'];
		//about
		let about=creator('span');
		about.innerHTML=posts[i]['profile-description'];
		//time
		let time=creator('span');
		time.innerHTML=posts[i]['time'];

		details.appendChild(name);
		details.appendChild(about);
		details.appendChild(time);
		post_profile_image.appendChild(profile_img);
		post_profile.appendChild(post_profile_image);
		post_profile.appendChild(details);
		post_box.appendChild(post_profile);

		//post description box
		let descriptionBox=creator('div');
		descriptionBox.classList.add('post-description','container');
		//description
		let description=creator('span');
		description.classList.add('description');
		description.innerHTML=posts[i]['description'];

		descriptionBox.appendChild(description);
		post_box.appendChild(descriptionBox);

		//post image section
		let postImage=creator('div');
		postImage.classList.add('post-image-container');
		//image
		let postimg=creator('img');
		postimg.classList.add('post-img');
		postimg.setAttribute('src',posts[i]['image']);

		postImage.appendChild(postimg);
		post_box.appendChild(postImage);

		//link if any
		if(posts[i]['link']!=='none'){
			//Link box
			let linkBox=creator('div');
			linkBox.classList.add('linkBox');
			//container
			let container=creator('div');
			container.classList.add('container');
			//Link Description
			let linkdesc=creator('span');
			linkdesc.classList.add('link-desc');
			linkdesc.innerHTML=posts[i]['link-desc'];
			//link
			let link=creator('a');
			link.setAttribute('href',posts[i]['link']);
			link.innerHTML=posts[i]['link'];

			container.appendChild(linkdesc);
			container.appendChild(link);
			linkBox.appendChild(container);
			post_box.appendChild(linkBox);
		}
		//likes
		let likesinfo=creator('div');
		likesinfo.classList.add('likes-info','container','flex');
		//reactions
		let reactionsInfo=creator('div');
		reactionsInfo.classList.add('reactions-info');
		let reactions_icons=creator('span');
		let reactions_value=creator('span');
		reactions_value.innerHTML=posts[i]['reactions'];
		//comments span
		let commentsInfo=creator('span');
		commentsInfo.innerHTML=posts[i]['comments'];
		commentsInfo.classList.add('commentsInfo');

		reactionsInfo.appendChild(reactions_icons);
		reactionsInfo.appendChild(reactions_value);
		likesinfo.appendChild(reactionsInfo);
		likesinfo.appendChild(commentsInfo);
		post_box.appendChild(likesinfo);

		//icons container
		let icons_container=creator('div');
		icons_container.classList.add('icons-container','container','flex');
		//Like
		let likeButton=creator('span');
		likeButton.classList.add('material-icons','likeButton');
		likeButton.innerHTML='thumb_up';
		
		//Comment
		let commentButton=creator('span');
		commentButton.classList.add('material-icons');
		commentButton.innerHTML='comment';
		
		//Share
		let shareButton=creator('span');
		shareButton.classList.add('fa','fa-share-alt');
		
		//Send
		let sendButton=creator('span');
		sendButton.classList.add('material-icons');
		sendButton.innerHTML='near_me';
		

		icons_container.appendChild(likeButton);
		icons_container.appendChild(commentButton);
		icons_container.appendChild(shareButton);
		icons_container.appendChild(sendButton);
		post_box.appendChild(icons_container);

		//Icon text container
		let iconsText=creator('div');
		iconsText.classList.add('icons-text-container','container','flex');

		let likeText=creator('span');
		likeText.classList.add('like-text');
		likeText.innerHTML='Like';

		let commentText=creator('span');
		commentText.classList.add('comment-text');
		commentText.innerHTML='Comment';

		let shareText=creator('span');
		shareText.classList.add('share-text');
		shareText.innerHTML='Share';

		let sendText=creator('span');
		sendText.classList.add('send-text');
		sendText.innerHTML='Send';

		iconsText.appendChild(likeText);
		iconsText.appendChild(commentText);
		iconsText.appendChild(shareText);
		iconsText.appendChild(sendText);
		post_box.appendChild(iconsText);

	}
}
//displays the side bar
classes('nav-toggle')[0].addEventListener('click',()=>{
	classes('menu')[0].classList.toggle('visible');
});
//shows/hides extra content in the sidebar
classes('down-arrow')[0].addEventListener('click',()=>{
	classes('up-arrow')[0].classList.toggle('visible');
	classes('down-arrow')[0].classList.toggle('hide');
	classes('sub-menu')[0].classList.toggle('hide');
});
classes('up-arrow')[0].addEventListener('click',()=>{
	classes('up-arrow')[0].classList.toggle('visible');
	classes('down-arrow')[0].classList.toggle('hide');
	classes('sub-menu')[0].classList.toggle('hide');
});

//For hiding the Sidebar when clicked outside 
document.addEventListener("click",(event)=>{
    if(classes('menu')[0].classList.contains('visible')){
    	if(!event.target.closest(".menu")  && !event.target.closest('.nav-toggle')){
    		classes('menu')[0].classList.toggle('visible');
    	}
    }
});