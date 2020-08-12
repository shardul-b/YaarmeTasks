let initial;
let story_initial;
window.onload=()=>{
	storyCreator();
	counter=0;
	initial=0;
	story_initial=0;
	storyBegin();
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
const stories_values={
	john:{
		profile:'Images/john.jpg',
		name:'John Doe',
		time:'Yesterday, 4:21 PM',
		story:['Images/rise.jpg','Images/mount.jpg'],
		description:'Awesome'
	},
	alice:{
		profile:'Images/alice.jpg',
		name:'Alice Lawrence',
		time:'Today, 3:21 PM',
		story:['Images/valley.jpg','Images/sea.jpg'],
		description:'woh'
	}
}
const storyCreator=()=>{
	let stories=classes('stories');
	for(let i in stories_values){
		//Story Container
		let storyContainer=creator('div');
		storyContainer.classList.add('story-container','hide');
		//Container
		let container=creator('div');
		container.classList.add('container');
		//Progress bar
		let progress=creator('div');
		progress.classList.add('progress','flex-space');
		container.appendChild(progress);
		//top-section
		let top=creator('div');
		top.classList.add('top-section','flex-space');

		let backArrow=creator('span');
		backArrow.classList.add('back-icon');
		top.appendChild(backArrow);
		
		let profileContainer=creator('div');
		profileContainer.classList.add('profile-container');
		profileContainer.innerHTML=`<img src='${stories_values[i]["profile"]}' class='profile-image'>`
		top.appendChild(profileContainer);

		let detailsContainer=creator('div');
		detailsContainer.classList.add('details-container');
		let profileName=creator('span');
		profileName.classList.add('profile-name');
		profileName.innerHTML=stories_values[i]['name'];
		detailsContainer.appendChild(profileName);
		let time=creator('span');
		time.classList.add('time');
		time.innerHTML=stories_values[i]['time'];
		detailsContainer.appendChild(time);
		top.appendChild(detailsContainer);

		let dots=creator('span');
		dots.classList.add('dots-icon');
		top.appendChild(dots);
		container.appendChild(top);

		let description=creator('span');
		description.classList.add('description');
		container.appendChild(description);
		let bottom=creator('div');
		bottom.classList.add('bottom');
		let up=creator('span');
		up.classList.add('up-icon');
		bottom.appendChild(up);
		let reply=creator('span');
		reply.classList.add('reply');
		reply.innerHTML='Reply';
		bottom.appendChild(reply);
		container.appendChild(bottom);
		
		for(let j in stories_values[i]['story']){
			let progress_sub=creator('div');
			progress_sub.classList.add('progress-sub');
			let progress_span=creator('span');
			progress_span.classList.add('progress-span');
			progress_sub.appendChild(progress_span);
			progress.appendChild(progress_sub);
			let storyImage=creator('img');
			storyImage.classList.add('story-image','hide');
			storyImage.setAttribute('src',stories_values[i]['story'][j]);	
			storyContainer.appendChild(storyImage);
		}
		storyContainer.appendChild(container);
		stories[0].appendChild(storyContainer);
	}
}	
const storyBegin=()=>{
	classes('story-container')[story_initial].classList.remove('hide');
	classes('progress-span')[initial].classList.add('progress-span-active');
	classes('story-image')[initial].classList.remove('hide');
	classes('progress-span')[initial].addEventListener('webkitAnimationEnd',nextStory);
	if(story_initial<1){
		let value=classes('story-container')[story_initial].parentNode.children.length;
		setTimeout(nextStory,5000*value);
	}
}
const nextStory=()=>{
	classes('progress-span')[initial].classList.remove('progress-span-active');
	classes('story-image')[initial].classList.add('hide');
	let value=classes('story-container')[story_initial];
	counter+=1;
	initial+=1;
	if(value.parentNode.children.length==counter && story_initial<1){
		classes('story-container')[story_initial].classList.add('hide');
		story_initial+=1;
		counter=0;
		storyBegin();
	}
	else if(story_initial>=1 && initial==4){
		story_initial=1;
		initial-=1;
	}
	classes('story-image')[initial].classList.remove('hide');
	classes('progress-span')[initial].classList.add('progress-span-active');	
}
const prevStory=()=>{
	classes('progress-span')[initial].classList.remove('progress-span-active');
	classes('story-image')[initial].classList.add('hide');
	if(initial==0 && story_initial==0){
		initial=0;
		counter=0;
	}
	else if(story_initial>0 && counter==0){
		classes('story-container')[story_initial].classList.add('hide');
		story_initial-=1;
		initial=0;
		counter=0;
		storyBegin();
	}
	else{
		counter-=1;
		initial-=1;	
	}
	classes('story-image')[initial].classList.remove('hide');
	classes('progress-span')[initial].classList.add('progress-span-active');
	
}
document.getElementsByTagName("body")[0].addEventListener('click',(e)=>{
  let x = e.clientX;
  let total=document.getElementsByTagName("body")[0].offsetWidth/2;
  if (x > total) {
    nextStory();
  } else {
    prevStory();
  }
});