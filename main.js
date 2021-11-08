//color array
let colors = ['blue', 'yellow', 'red', 'pink', 'green', 'purple', 'orange']
//get button
let button = document.getElementById('button')
//add event listener
button.addEventListener('click', function() {
    //randomizer
    var randonColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container')

    container.style.background = randonColor
})