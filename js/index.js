document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('github-form')
    form.addEventListener('submit', e => {
        e.preventDefault();
        let input = e.target.search.value;
        
        fetch(`https://api.github.com/search/users?q=${input}`)
        .then(res => res.json())
        .then(data => {
            let objList = data.items
            console.log(data)
            console.log(data.items)
            for(let i = 0; i < data.items.length; i++) {
                console.log(data.items[i].login)
                createUser(data.items[i].login)
            }
            
        })
        })
    })



    // {
    //     for(const user in data.items) {
    //         let li = document.createElement('li');
    //         li.textContent = user.login;
    //         document.getElementById('github-container').appendChild(li);
    //     }

    function createUser (user) {
        let ol = document.createElement('ol');
        ol.textContent = user;
        document.getElementById('github-container').appendChild(ol)
    }