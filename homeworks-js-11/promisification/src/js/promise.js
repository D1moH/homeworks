// const fetchUser = userName => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = Math.random() > 0.3;

//             if (success) {
//                 const user = { name: userName, age: 26, posts: 74 };
//                 resolve(user);
//             }

//             const error = 'Произошла ошибка :(';
//             reject(error);
//         }, 1000);
//     })
// };

// fetchUser('Mango').then(onFetchUserSuccess).catch(onFetchUserError);

// function onFetchUserSuccess(user) {
//     console.log(user);
// }

// function onFetchUserError(error) {
//     console.log(error);
// }

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(console.log)
//     .catch(console.log);

// const fetchTodo = id => {
//     return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.json())
// }

// fetchTodo(5).then(console.log).catch(console.log);

const makePromise = delay => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(delay)
        }, delay);
    })
}

makePromise(2000).then(console.log);