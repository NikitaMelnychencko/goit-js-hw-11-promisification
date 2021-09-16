const refs = {
  globalLink: document.querySelector('body'),
  blockBtn: document.querySelector('.block-btn')
  
}

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorPick = {
  remind() {
    this.timeoutID = undefined;
  },
  setup() {
    if (typeof this.timeoutID === 'number') {
      this.cancel();
    }
    this.timeoutID = setInterval(this.addBackGroundColorBody, 1000);
  },
  cancel() {
    clearInterval(this.timeoutID);
  },
  addBackGroundColorBody() {
    const randomValue = randomIntegerFromInterval(0, colors.length - 1);
    refs.globalLink.style.backgroundColor = colors[randomValue]; 
  }
};

refs.blockBtn.addEventListener('click', e => {
  if (e.target.dataset.action === "start") {
    colorPick.setup()
    e.target.disabled = true
  } else {
    colorPick.cancel()
    e.currentTarget.firstElementChild.disabled = false
  }
})
