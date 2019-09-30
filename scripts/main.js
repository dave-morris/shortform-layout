// get height of video videoContainer
const videoHeight = document.getElementById("topVideo").clientHeight;
document.getElementById("actualVideo").style.height = videoHeight;
// console.log(videoHeight);

window.onresize = function(event) {
  const videoHeight = document.getElementById("topVideo").clientHeight;
  // console.log(videoHeight);

  document.getElementById("actualVideo").style.height = videoHeight;

};



// get the sticky element

// const stickyElm = document.getElementById('videoContainer')
//
// const observer = new IntersectionObserver(
//
//     ([e]) => e.target.classList.toggle('media__image__maxHeight', e.intersectionRatio < 1),
//     {threshold: [1]}
//
// );
//
// observer.observe(stickyElm)



window.onscroll = function() {myFunction()};

function myFunction() {

  var element = document.getElementById("scrollPosition");
  var elementTwo = document.getElementById("videoContainer");

  console.log(document.documentElement.scrollTop);

  if (document.documentElement.scrollTop > 80) {

    elementTwo.classList.add("media__image__maxHeight");

  } else if (document.documentElement.scrollTop == 0) {

    elementTwo.classList.remove("media__image__maxHeight");
    console.log(document.documentElement.scrollTop);

  }
}
