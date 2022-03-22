const horses = [
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Seabiscuit',
];

const getRandomTime = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const run = horse => {
    return new Promise(resolve => {
        const time = getRandomTime(2000, 3500);
        setTimeout(() => {
            resolve({ horse, time })
        }, time);
    })
}

const promises = horses.map(run)

Promise.race(promises).then(({ horse, time }) => {
    console.log(`Победила ${horse} с временем ${time}`);
})

Promise.all(promises).then(result => {
    console.log(result);
}).catch(console.log);



