import Win from './window';

const Typing = {
  sections: document.querySelectorAll('.window'),
  currentSect: document.querySelector('.window.active'),
  keydownHandler: null,

  init(){
    this.sections.forEach(sect => {
      if (sect.classList.contains('active')) {
        this.currentSect = sect;
        sect.addEventListener('click', ()=>{
          sect.classList.remove('interact-with');
          sect.classList.add('focus');
          this.typingInteraction();
        });
      }
    });
  },

  typingInteraction(){
    let typingText = this.currentSect.querySelector('.typing-text'),
        finalText = "",
        typingLetterIndex = 0,
        isTypingComplete = false;

    this.keydownHandler = () => {
      if (!typingText.classList.contains('active')) {
        finalText = typingText.innerText;
        typingText.innerText = '';
        typingText.classList.add('active');
        typingLetterIndex = 0;
        isTypingComplete = false;
      }

      if (typingLetterIndex < finalText.length) {
        typingText.innerText += finalText[typingLetterIndex];
        typingLetterIndex++;
      } else {
        isTypingComplete = true;
        document.removeEventListener('keydown', this.keydownHandler);

        const floatingWin = document.querySelectorAll('.window.floating');
        floatingWin.forEach(win => {
          Win.openWin(win);
        });
      }
    };

    document.addEventListener('keydown', this.keydownHandler);
  }
};

export default Typing;
