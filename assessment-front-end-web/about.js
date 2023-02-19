console.log("hello world");


function handleSubmit() {
	evt.preventDefault();
	
	alert('The form has been submitted!')
}

function compliment() {
	alert('The world is blessed to have you in it!  :)')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img')

img.addEventListener('mouseover', compliment)