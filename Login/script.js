//Classes
const classes=(val)=>{
	let values=document.getElementsByClassName(val);
	return values;
};
//ID's
const ids=(val)=>{
	let value=document.getElementById(val);
	return value;
};

let count;
//Displays Signup page
const signup=()=>{
	classes('login-form')[0].classList.add('hide');
	classes('register-form')[0].classList.remove('hide');
	count=0;
	classes('tab')[count].classList.remove('hide');
	count+=1;
}
//Displays Signup when page loads
window.onload=()=>{
	signup();
}
//Display Login section
const signin=()=>{
	classes('login-form')[0].classList.remove('hide');
	classes('register-form')[0].classList.add('hide');
}
//optional fields
classes('optional')[0].addEventListener('click',()=>{
	classes('optional-content')[0].classList.toggle('hide');
	classes('up-icon')[0].classList.toggle('hide');
	classes('down-icon')[0].classList.toggle('hide');
});
//Adds skills
classes('skills-intro')[0].addEventListener('click',()=>{
	let skillValue=ids('skills').value||'No Skill';
	classes('skills')[0].innerHTML+=`<span class='skill'>${skillValue}</span>`;
});
//Tabs Handler
classes('next')[0].addEventListener('click',()=>{
	classes('tab')[count].classList.remove('hide');
	console.log(count);
	if(count==2){
		classes('next')[0].classList.add('hide');
	}else{
		count++;
	}
});