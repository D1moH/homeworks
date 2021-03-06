const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

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

const switcher = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
            bodyRef.style.backgroundColor =
                colors[randomIntegerFromInterval(0, colors.length - 1)];
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.isActive = false;
    }
};

startBtn.addEventListener('click', switcher.start.bind(switcher));
stopBtn.addEventListener('click', switcher.stop.bind(switcher))