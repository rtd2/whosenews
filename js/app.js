$(document).foundation()

function randomStory(storyID) {
    var num = Math.floor(Math.random()*(3-0+1)+0);
    console.log(num);
    var id = storyID;
    var story = stories[id][num];
    document.getElementById("video").innerHTML = '<iframe id="video" width="1" height="1" src="' + story + '?autoplay=1" frameborder="0"></iframe>';
}

var stories = {
  "northkorea": [
    "//www.youtube.com/embed/tVqE8XdU7OM",
    "//www.youtube.com/embed/GzAdcTtwkM0",
    "//www.youtube.com/embed/SVwW2Rm4LVE",
    "//www.youtube.com/embed/CryEhQJZ7g0"
  ],
  "trump": [
    "//www.youtube.com/embed/yGnb7Gy3zEg",
    "//www.youtube.com/embed/_d2_Upfi3NE",
    "//www.youtube.com/embed/CC-K5O9EZUE",
    "//www.youtube.com/embed/opSmUGlvDHA"
  ],
  "transtroops": [
    "//www.youtube.com/embed/3Ikv9JoM5Ss",
    "//www.youtube.com/embed/coFVPfNkR9A",
    "//www.youtube.com/embed/AqAwnLPW-mU",
    "//www.youtube.com/embed/TTUcnEDtNrk"
  ],
  "aca": [
    "//www.youtube.com/embed/DcHGBaf_ggU",
    "//www.youtube.com/embed/YnkNVuRmbCo",
    "//www.youtube.com/embed/kEambA7SaKs",
    "//www.youtube.com/embed/lYSbz_WPzJA"
  ]

}
