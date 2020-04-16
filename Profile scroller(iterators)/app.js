const data = [
    {
      name: 'Manas Tiwari',
      age: 32,
      gender: 'male',
      lookingfor: 'female',
      location: 'London',
      image: 'https://randomuser.me/api/portraits/men/89.jpg'
    },
    {
      name: 'Ria Gogiya',
      age: 26,
      gender: 'female',
      lookingfor: 'male',
      location: 'bombay',
      image: 'https://randomuser.me/api/portraits/women/71.jpg'
    },
    {
      name: 'Manav Pandey',
      age: 38,
      gender: 'male',
      lookingfor: 'female',
      location: 'Paris',
      image: 'https://randomuser.me/api/portraits/men/72.jpg'
    }
];

const profiles = nextProfileIterator(data);

nextProfile()

//Event listener 
const button = document.querySelector('#nextProfile')
button.addEventListener('click', nextProfile)

function nextProfile(){
    const currentProfile = profiles.next().value

    if(currentProfile != undefined){
    document.getElementById('displayImg').innerHTML = `
        <img src = ${currentProfile.image}>
    `
    document.getElementById('profileDisplay').innerHTML = `
        <ul class = "list-group">
            <li class = "list-group-item">Name :${currentProfile.name}</li>
            <li class = "list-group-item">Age : ${currentProfile.age}</li>
            <li class = "list-group-item">Gender : ${currentProfile.gender}</li>
            <li class = "list-group-item">Looking For : ${currentProfile.lookingfor}</li>
            <li class = "list-group-item">Location: ${currentProfile.location}</li>
        </ul>
    `
    }else{
        //reload
        window.location.reload()
    }
}

function nextProfileIterator(profile){
    nextIndex = 0 ;

    return{
        next: function(){
            return nextIndex < profile.length ?
            { value : profile[nextIndex++] , done: false} : 
            {done : true}
        }
    }
}
