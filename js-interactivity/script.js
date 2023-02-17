const message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault()
    const inputField = document.querySelector('input');
    const movieList = document.querySelector('ul')
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span')
    const deleteBtn = document.createElement('button')

    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    movieTitle.addEventListener('click', crossOffMovie)
    
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
    movieList.appendChild(movie)
    
    inputField.value = ''
}

let addToList = document.querySelector('form')

addToList.addEventListener('submit', addMovie)

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = `${event.target.previousSibling.textContent} deleted!`

    revealMessage()
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    if(event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent =  `${event.target.textContent} added back!`
    }

    revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}