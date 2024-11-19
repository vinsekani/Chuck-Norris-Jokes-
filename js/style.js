
const jokesButton = document.querySelector('.button')
console.log(jokesButton)

const getJokes = async() =>{
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    console.log(response)

    const randomJokes = await response.json()
    console.log(randomJokes)
   document.querySelector('p').innerText = randomJokes.value
}

getJokes()

jokesButton.addEventListener('click', function(e){
    getJokes()
})

