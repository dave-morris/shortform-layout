// var videoHeight = document.getElementById("videoContainer").offsetHeight;
// var windowHeight = window.innerHeight;
// var maxVideoHeight = windowHeight * 0.4;
// var mastheadHeight = document.getElementById("sportMasthead").offsetHeight;
// var videoHeightDifference = videoHeight - maxVideoHeight;
//
// // console.log(videoHeightDifference);
//
//
//
// window.onscroll = function() { checkScreenScroll() };
//
// function checkScreenScroll() {
//
//   var scrollPosition = document.documentElement.scrollTop;
//   var progress = ((scrollPosition-mastheadHeight)/(maxVideoHeight-mastheadHeight));
//   var invertProgress = 1-progress;
//   var element = document.getElementById("actualVideo");
//
//   if (videoHeight >= maxVideoHeight) {
//
//     if (scrollPosition <= maxVideoHeight && scrollPosition > mastheadHeight) {
//
//       var newVideoHeight = (videoHeightDifference*invertProgress) + maxVideoHeight;
//
//       console.log("The height of the video should be " + newVideoHeight + " The original height of the video is " + videoHeight);
//
//       element.style.height = newVideoHeight + "px";
//
//
//     } else if (scrollPosition > maxVideoHeight) {
//
//       element.style.height = maxVideoHeight + "px";
//
//     } else if (scrollPosition < mastheadHeight) {
//
//       element.style.height = videoHeight + "px";
//
//     }
//
//   }
//
// }




//
// if (document.getElementById('mediaContainer').classList.contains("two-column")) {
//   //do nothing
// } else {
//   // get height of video videoContainer
//   const videoHeight = document.getElementById("videoContainer").clientHeight;
//   document.getElementById('mediaContainer').style.top = videoHeight + "px";
// };
//
// window.onresize = function(event) {
//   const videoHeight = document.getElementById("videoContainer").clientHeight;
// };
//
//
// window.onscroll = function() { myFunction() };
//
// function myFunction() {
//
//   var element = document.getElementById("scrollPosition");
//   var elementTwo = document.getElementById("videoContainer");
//
//   if (document.documentElement.scrollTop > 80) {
//
//     elementTwo.classList.add("media__image__maxHeight");
//
//   } else if (document.documentElement.scrollTop == 0) {
//
//     elementTwo.classList.remove("media__image__maxHeight");
//
//   }
//
//   if (document.getElementById('mediaContainer').classList.contains("two-column")) {
//
//     //Do nothing
//
//   } else {
//
//     // get height of video videoContainer
//     const videoHeight = document.getElementById("videoContainer").clientHeight;
//     // console.log("The height of the video is " + videoHeight);
//     // document.getElementById("actualVideo").style.height = videoHeight;
//
//     document.getElementById('mediaContainer').style.top = videoHeight + "px";
//
//     window.onresize = function(event) {
//       const videoHeight = document.getElementById("videoContainer").clientHeight;
//     };
//
//   }
//
// }
