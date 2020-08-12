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
//Chats Object
const chat_details={
	townsend:{
		image:'Images/toy.jpg',
		name:'Townsend Seary',
		message:`What's up, how are you?`,
		time:'03:41 PM',
		unread:'true',
		unread_count:3
	},
	forest:{
		image:'Images/dog.jpg',
		name:'Forest Crotch',
		message:`<span class='camera-icon'> </span>  Photo`,
		time:'Yesterday',
		unread:'true',
		unread_count:1
	},
	byrom:{
		image:'Images/build.jpg',
		name:'Byrom Guittet',
		message:'I sent all the files. Good luck with it',
		time:'11:05 AM',
		unread:false
	},
	adam:{
		image:'Images/reciever.jpg',
		name:'Adam Worvell',
		message:'I want those files from you...',
		time:'11:56 PM',
		unread:false
	},
	fam:{
		image:'Images/fam.png',
		name:'My Family',
		message:'<b>Dad: </b>Hello!',
		time:'Yesterday',
		unread:false
	},
	jessy:{
		image:'Images/jess.jpg',
		name:'Jessica Kindle',
		message:`<span class='video-icon'> </span>  Video`,
		time:'05:10 AM',
		unread:false
	}

};
const chatsCreator=()=>{
	for (let i in chat_details){
		//container div
		const container=creator('div');
		container.classList.add('container');
		
		//Chat container
		const chat_container=creator('div');
		chat_container.classList.add('chat-container');
		

		//Image container
		const image_container=creator('div');
		image_container.classList.add('image-container');
		//image
		const img=creator('img');
		img.classList.add('profile-image');
		img.setAttribute('src',chat_details[i]['image']);
		image_container.appendChild(img);
		chat_container.appendChild(image_container);

		//Profile details container
		const profile_details=creator('div');
		profile_details.classList.add('profile-details');
		//Profile name and time container
		const name_unread=creator('div');
		name_unread.classList.add('name-unread');
		//Name
		const name=creator('span');
		name.classList.add('profile-name');
		name.innerHTML=chat_details[i]['name'];
		name_unread.appendChild(name);
		//Message
		if(chat_details[i]['unread']){
			const unread_count_div=creator('span');
			unread_count_div.classList.add('unread-count');
			unread_count_div.innerHTML=chat_details[i]['unread_count'];
			// name.style.color='green';
			// msg_time.style.color='green';
			name_unread.appendChild(unread_count_div);
		}
		profile_details.appendChild(name_unread);
		const message_time_div=creator('div');
		message_time_div.classList.add('message-time-div');
		const display_message=creator('span');
		display_message.classList.add('display-message');
		display_message.innerHTML=chat_details[i]['message'];
		message_time_div.appendChild(display_message);

		const msg_time=creator('span');
		msg_time.classList.add('message-time');
		msg_time.innerHTML=chat_details[i]['time'];
		message_time_div.appendChild(msg_time);

		profile_details.appendChild(message_time_div);		
		chat_container.appendChild(profile_details);
		if(chat_details[i]['unread']){
			name.style.color='green';
			msg_time.style.color='green';
		}
		//append chat-container to container
		container.appendChild(chat_container);
		// container.appendChild(button);
		//append container to contacts-container div
		classes('contacts-container')[0].appendChild(container);
	}
};
//IIFE for creating chats/adding images
(()=>{
	chatsCreator();
	let sender_image=classes('sender-image');
	let reciever_image=classes('reciever-image');
	for(let i=0;i<sender_image.length;i++){
		sender_image[i].setAttribute('src','Images/sender.jpg')
	}
	for(let i=0;i<reciever_image.length;i++){
		reciever_image[i].setAttribute('src','Images/reciever.jpg')
	}
})();