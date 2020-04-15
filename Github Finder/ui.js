class UI{
    
    //Show profile
    showProfile(user){
        //Get Element to display Profile
        const div = document.querySelector('.profile')

        div.innerHTML = `
            <div class = "container" id = "prof">
                <div class = "card card-body">
                    <div class = "row">
                        <div class = "col-sm-3">
                            <img class="img-fluid mb-2" src = "${user.avatar_url}">
                            <a href = "${user.html_url}" class = "btn btn-info btn-block ">View Profile</a>
                        </div>
                        <div class = "col-sm-9">
                            <span class = "badge badge-primary">Public Repos ${user.public_repos}</span>
                            <span class = "badge badge-success">Followers ${user.followers}</span>
                            <span class = "badge badge-info">Following ${user.following}</span>
                            <span class = "badge badge-warning"> Public Gits ${user.public_gists} </span>
                            <ul class = "list-group mt-2">
                                <li class = "list-group-item">Name: ${user.name} </li>
                                <li class = "list-group-item">Email: ${user.email} </li>
                                <li class = "list-group-item">Company: ${user.company} </li>
                                <li class = "list-group-item">Blog: ${user.blog} </li>
                                <li class = "list-group-item">Location: ${user.location} </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3 class = "page-heading mb-2 mt-2 ml-3">Latest Repos</h3>
                <div id = "repos"></div>
            </div>
        `
        
    }

    //Show Repos
    showRepos(repos){
       let output=''
        repos.forEach((repo)=>{
            output += `
                <div class = "card card-body mb-2">
                    <div class = "row">
                        <div class = "col-md-6">
                            <a href=${repo.html_url}>${repo.name}</a>
                        </div>
                        <div class = "col-md-6">
                            <span class = "badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class = "badge badge-info">Watchers: ${repo.watchers}</span>
                            <span class = "badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `
        })
        document.getElementById('repos').innerHTML = output
    }

    //Show Alert
    showAlert(message,className){
        this.clearprevAlerts();
        //Element to display error message
        const div = document.createElement('div')
        //Assign a classname
        div.className = className
        //Assign the message
        div.innerHTML = message
        //Grab container and card
        const container = document.getElementById('container')

        const card = document.getElementById('card')

        container.insertBefore(div,card)

        setTimeout(() => {
            this.clearprevAlerts()
        },600)
    }

    //Clear previous alerts
    clearprevAlerts(){
        const alert = document.querySelector('.alert')
        if(alert){
            alert.remove()
        }
    }

    //Clear Profile
    clearProfile(){
        const clearProf = document.querySelector('#prof')
        clearProf.innerHTML = ''
    }
}