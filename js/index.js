document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('github-form')
    form.addEventListener('submit', e => {
        e.preventDefault();
        let input = e.target.search.value;
        
        fetch(`https://api.github.com/search/users?q=${input}`)
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < data.items.length; i++) {
                console.log(data.items[i].login)
                createUser(data.items[i].login)
            }  
        })
        })
    })

    function createUser (user) {
        let ol = document.createElement('ol');
        ol.textContent = user;
        document.getElementById('user-list').appendChild(ol)
    }