let img1 = document.querySelector('#flo-figma');
let img2 = document.querySelector('#flo-github');
let img3 = document.querySelector('#flo-ide');
let img4 = document.querySelector('#flo-photoshop');
let img5 = document.querySelector('#flo-trello');

let memoji_1 = document.querySelector('#memoji-desktop');

window.addEventListener("scroll", function () {

  parallax(memoji_1, 0.0040);

  parallax(img1, -0.0030);
  parallax(img2, -0.015);
  parallax(img3, -0.0030);
  parallax(img4, -0.0030);
  parallax(img5, -0.010);

})

let parallax = function(elt, ratio) {
  let { scrollY } = window;
  elt.style.transform = "translateY("+ ratio * scrollY + "em)";
}

let isVisible = function(element){
  let inScreen = element.getBoundingClientRect();

  if(inScreen.top >= 0 &&
      inScreen.left >= 0 &&
      inScreen.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      inScreen.bottom <= (window.innerHeight || document.documentElement.clientHeight)){

      return true
  }
  else{
      return false
  }
}
