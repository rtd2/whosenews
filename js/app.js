$(document).foundation()

function randomStory(storyID) {
    var num = Math.floor(Math.random()*(3-0+1)+0);
    console.log(num);
    var id = storyID;
    var story = stories[id][num];
    document.getElementById("video").innerHTML = '<iframe id="video" width="1" height="1" src="' + story + '" frameborder="0"></iframe>';
}

var stories = {
  "northkorea": [
    "//www.youtube.com/embed/tVqE8XdU7OM?autoplay=1",
    "//www.youtube.com/embed/GzAdcTtwkM0?autoplay=1",
    "//www.youtube.com/embed/SVwW2Rm4LVE?autoplay=1",
    "//www.youtube.com/embed/CryEhQJZ7g0?autoplay=1"
  ],
  "trump": [
    "//www.youtube.com/embed/yGnb7Gy3zEg?autoplay=1",
    "//www.youtube.com/embed/_d2_Upfi3NE?autoplay=1",
    "//www.youtube.com/embed/CC-K5O9EZUE?autoplay=1",
    "//www.youtube.com/embed/opSmUGlvDHA?autoplay=1"
  ],
  "transtroops": [
    "//www.youtube.com/embed/3Ikv9JoM5Ss?autoplay=1",
    "//www.youtube.com/embed/coFVPfNkR9A?autoplay=1",
    "//www.youtube.com/embed/AqAwnLPW-mU?autoplay=1",
    "//www.youtube.com/embed/TTUcnEDtNrk?autoplay=1"
  ],
  "aca": [
    "//www.youtube.com/embed/DcHGBaf_ggU?autoplay=1",
    "//www.youtube.com/embed/YnkNVuRmbCo?autoplay=1",
    "//www.youtube.com/embed/kEambA7SaKs?autoplay=1",
    "//www.youtube.com/embed/lYSbz_WPzJA?autoplay=1"
  ]

}
