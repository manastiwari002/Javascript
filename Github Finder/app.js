searchBar = document.getElementById('githubSearch')

//Create instance of Github and UI
const git = new Github;
const ui = new UI;


//Call Event Listener
searchBar.addEventListener('keyup',function(e){
    const input = e.target.value

    if(input !== ''){
        git.getUser(input)
            .then(data => {
                    if(data.profile.message==='Not Found'){
                        //Show Alert
                        ui.showAlert('User Not Found','alert alert-danger');
                        //Clear profile if any
                        ui.clearProfile();
                    }else{
                        //Show Repos and profile
                        ui.showProfile(data.profile)
                        ui.showRepos(data.repos)
                    }
                }
            )
    }
    
})