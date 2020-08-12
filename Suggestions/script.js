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

const details={
	johnd:{
		image:'Images/john.jpg',
		name:'John D',
		premium:false,
		position:'2nd',
		job:'Executive Engineer at ABC Limited',
		location:'India',
		connections_image:['Images/kendrick.jpg','Images/alex.jpg','Images/alexander.jpg'],
		count:3
	},
	johnette:{
		image:'Images/elizabeth.jpg',
		name:'Johnette Doe',
		premium:true,
		position:'3rd',
		job:'Data Scientist at HP',
		location:'London',
		connections_image:['Images/john.jpg','Images/alex.jpg','Images/alexander.jpg'],
		count:6
	},
	john:{
		image:'Images/alex.jpg',
		name:'John Doe',
		premium:false,
		position:'2nd',
		job:'Full Stack Developer at Google Inc.',
		location:'New York',
		connections_image:['Images/elizabeth.jpg','Images/alex.jpg','Images/kendrick.jpg'],
		count:5
	},
	johnson:{
		image:'Images/alexander.jpg',
		name:'Johnson Doe',
		premium:true,
		position:'2nd',
		job:'Software Developer at Flipkart',
		location:'Singapore',
		connections_image:['Images/elizabeth.jpg','Images/kendrick.jpg','Images/niles.jpg'],
		count:5
	},
	johndoe:{
		image:'Images/niles.jpg',
		name:'John Doe',
		premium:false,
		position:'3rd',
		job:'Music Producer at Dharma Worldwide',
		location:'New York',
		connections_image:['Images/elizabeth.jpg','Images/kendrick.jpg','Images/alex.jpg'],
		count:7
	},
	jonathan:{
		image:'Images/kendrick.jpg',
		name:'Johnathan D',
		premium:false,
		position:'3rd',
		job:'Artist at DarkArt and Co.',
		location:'New York',
		connections_image:['Images/elizabeth.jpg','Images/niles.jpg','Images/alexander.jpg'],
		count:7
	}

}
const accounts_creator=()=>{
	for(let i in details){
		const account_container=creator('div');
		account_container.classList.add('account-container','flex-space');
		//Image
		const image_container=creator('div');
		image_container.classList.add('image-container');
		const image=creator('img');
		image.classList.add('profile-image');
		image.setAttribute('src',details[i]['image']);
		image_container.appendChild(image);
		account_container.appendChild(image_container);
		//Details
		const details_container=creator('div');
		details_container.classList.add('details-container');
		//Container
		const container=creator('div');
		container.classList.add('container','flex-space');
		//details-sub
		const details_sub_container=creator('div');
		details_sub_container.classList.add('details-sub-container');
		//Name section
		const profile_name_section=creator('div');
		profile_name_section.classList.add('profile-name-section','flex');
		//Name
		const profile_name=creator('span');
		profile_name.classList.add('profile-name');
		profile_name.innerHTML=details[i]['name'];
		profile_name_section.appendChild(profile_name);
		//premium
		if(details[i]['premium']){
			const premium=creator('span');
			premium.classList.add('premium-icon');
			profile_name_section.appendChild(premium);
		}
		//dot
		const dot=creator('span');
		dot.classList.add('dot-icon');
		profile_name_section.appendChild(dot);
		//position
		const profile_position=creator('span');
		profile_position.classList.add('profile-position');
		profile_position.innerHTML=details[i]['position'];
		profile_name_section.appendChild(profile_position);
		details_sub_container.appendChild(profile_name_section);
		//Description
		const profile_job=creator('span');
		profile_job.classList.add('profile-job');
		profile_job.innerHTML=details[i]['job'];
		details_sub_container.appendChild(profile_job);
		//Location container
		const location_container=creator('div');
		location_container.classList.add('location-container','flex');
		//Location icon
		const location_icon=creator('span');
		location_icon.classList.add('location-icon');
		location_container.appendChild(location_icon);
		//Location
		const location=creator('span');
		location.classList.add('location');
		location.innerHTML=details[i]['location'];
		location_container.appendChild(location);
		details_sub_container.appendChild(location_container);
		//Connections area
		const connections_container=creator('div');
		connections_container.classList.add('connections-container','flex');
		//Images
		const images_container=creator('div');
		images_container.classList.add('images-container','flex');
		for(let j of details[i]['connections_image']){
			const connection_image_container=creator('div');
			connection_image_container.classList.add('connection-image-container');
			const connection_image=creator('img');
			connection_image.classList.add('connection-profile-image');
			connection_image.setAttribute('src',j);
			connection_image_container.appendChild(connection_image);
			images_container.appendChild(connection_image_container);
		}
		connections_container.appendChild(images_container);
		const connection_desc=creator('span');
		connection_desc.classList.add('connection-description');
		connection_desc.innerHTML=`&nbsp;${details[i]['count']} shared connections`;
		connections_container.appendChild(connection_desc);
		details_sub_container.appendChild(connections_container);
		//Connections area end
		container.appendChild(details_sub_container);
		//more
		const more=creator('span');
		more.classList.add('more-icon');
		container.appendChild(more);
		details_container.appendChild(container);
		account_container.appendChild(details_container);
		classes('accounts-section')[0].appendChild(account_container);
	}	
}



(()=>{
	accounts_creator();
})();