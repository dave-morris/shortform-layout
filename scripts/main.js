
if (document.getElementById('mediaContainer').classList.contains("one-column")) {
  //do nothing
} else {
  // get height of video videoContainer
  const videoHeight = document.getElementById("videoContainer").clientHeight;
  document.getElementById('mediaContainer').style.top = videoHeight + "px";
};

window.onresize = function(event) {
  const videoHeight = document.getElementById("videoContainer").clientHeight;
};


window.onscroll = function() { myFunction() };

function myFunction() {

  var element = document.getElementById("scrollPosition");
  var elementTwo = document.getElementById("videoContainer");

  if (document.documentElement.scrollTop > 80) {

    elementTwo.classList.add("media__image__maxHeight");

  } else if (document.documentElement.scrollTop == 0) {

    elementTwo.classList.remove("media__image__maxHeight");

  }

  if (document.getElementById('mediaContainer').classList.contains("one-column")) {

    //Do nothing

  } else {

    // get height of video videoContainer
    const videoHeight = document.getElementById("videoContainer").clientHeight;
    // console.log("The height of the video is " + videoHeight);
    // document.getElementById("actualVideo").style.height = videoHeight;

    document.getElementById('mediaContainer').style.top = videoHeight + "px";

    window.onresize = function(event) {
      const videoHeight = document.getElementById("videoContainer").clientHeight;
    };

  }

}
