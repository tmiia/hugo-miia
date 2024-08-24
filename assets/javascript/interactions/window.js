const Win = {
  floatingWin : document.querySelectorAll('.window.floating'),

  init(){
    this.floatingWin.forEach(win => {
      win.addEventListener('click', ()=>{
        for (let i = 0; i < this.floatingWin.length; i++) {
          this.floatingWin[i].classList.remove("fist-plan");
        }

        win.classList.add('fist-plan');
        console.log(win);

      })
    });
  },

  openWin(win){
    win.classList.remove('close');
    let tl = gsap.timeline({
      ease: "elastic.out(1,0.3)",
    });

    tl.fromTo(".window:nth-of-type(4)", {x: 1000, opacity: 0, scale: 1.3}, {duration: .4, x: 0, opacity: 1, scale: 1});
    tl.fromTo(".window:nth-of-type(3)", {x: 1000, opacity: 0, scale: 1.3}, {duration: .4, x: 0, opacity: 1, scale: 1});
    tl.fromTo(".window:nth-of-type(2)", {x: 1000, opacity: 0, scale: 1.3}, {duration: .4, x: 0, opacity: 1, scale: 1});
  }
}

export default Win;
