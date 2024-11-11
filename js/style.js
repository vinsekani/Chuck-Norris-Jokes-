
const jokesButton = document.querySelector('.button')




const getJokes = async() =>{
    const response = await fetch('https://api.chucknorris.io/jokes/random')

    const randomJokes = await response.json()
   document.querySelector('p').innerText = randomJokes.value
}

getJokes()

jokesButton.addEventListener('click', function(e){
    getJokes()
})

