//Load Button
const button = document.querySelector('#button')

//Load Event Listeners
button.addEventListener('click', getJokes)
let count = 0;
function getJokes(e){
    const input = document.getElementById('input')
    //Get jokes from api
    getJokesFromapi(input.value)
    .then( data => {
        const jokeContent = document.querySelector('.list-group')
        const jokes = data.value
        // let outputDisplay;
        jokes.forEach(joke => {
            let output = ''   
            output = output + `
                    <li class = "list-group-item">${joke.joke}</li>
            `

            jokeContent.innerHTML += output
        });
    })  
    e.preventDefault();
}

//Get Jokes from API
async function getJokesFromapi(number){
    const res = await fetch(`http://api.icndb.com/jokes/random/${number}`)

    const data = await res.json()

    return data;
}
