//Set element to track whether it leaves or enters the viewport
const headerEl = document.querySelector('.masthead')

//Set element to change to fixed
const fixedEl = document.querySelector('#pinableVideo')

//Get the various sizes of important things
const placeholderVidHeight = document.querySelector('.placeholderVideo').clientHeight;
const fortyPercentWindowHeight = window.innerHeight*0.4;

//Assign video to const
const vid = document.getElementById("shortformVideo");

window.addEventListener('resize', function(event){

	const placeholderVidHeight = document.querySelector('.placeholderVideo').clientHeight;
	const fortyPercentWindowHeight = window.innerHeight*0.4;

	if (fortyPercentWindowHeight < placeholderVidHeight) {
		fixedEl.classList.add('resizing')
	} else {
		fixedEl.classList.remove('resizing')
	}

});

const observer = new IntersectionObserver((entries) => {
		if (!entries[0].isIntersecting) {
      fixedEl.classList.add('enabled')
    } else {
      fixedEl.classList.remove('enabled')
    }
	})

document.getElementById("close").addEventListener("click", function(){
	fixedEl.classList.remove('enabled');
	vid.pause();
});


observer.observe(headerEl)
