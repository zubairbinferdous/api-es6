function load() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url).then(res => res.json()).then(data => console.log(data.title))
}

function loadUser() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url).then(res => res.json()).then(data => {
        const user = data[0].username;
        const userCom = data[0].company.name;
        console.log(user , userCom);
    });
}

