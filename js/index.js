document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('github-form')
    form.addEventListener('submit', e => {
        e.preventDefault();
        let input = e.target.search.value;
        
        fetch(`https://api.github.com/search/users?q=${input}`)
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < data.items.length; i++) {
                createUser(data.items[i].login)
            }  
        })
        })
    })

    function createUser (user) {
        let li = document.createElement('li');
        li.textContent = user;
        document.getElementById('user-list').appendChild(li)

        li.addEventListener('click', () => {
            let list = document.getElementById('repos-list')
            list.innerHTML = '';
            fetch(`https://api.github.com/users/${user}/repos`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                data.forEach(repo => {
                    let liRepo = document.createElement('li')
                    liRepo.textContent = repo.url; 
                    document.getElementById('repos-list').appendChild(liRepo)
                })
                
            })
        })
    }