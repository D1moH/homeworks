const refs = {
    days: document.querySelector('[data-value = days]'),
    hours: document.querySelector('[data-value = hours]'),
    mins: document.querySelector('[data-value = mins]'),
    secs: document.querySelector('[data-value = secs]'),
}

const timer = {
    start() {
        const targetDate = new Date('Apr 17, 2022')
        setInterval(() => {
            const currentTime = Date.now();
            const endTime = targetDate - currentTime;
        
            countdownTimer(endTime)
        }, 1000);
    },
};

function countdownTimer(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = `${days}`
    refs.hours.textContent = `${hours}`
    refs.mins.textContent = `${mins}`
    refs.secs.textContent = `${secs}`
}

function pad(value) {
    return String(value).padStart(2, '0');
}
timer.start()


