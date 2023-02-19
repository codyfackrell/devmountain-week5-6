const color = document.querySelector('#color')
const place = document.querySelector('#place')
const ritual = document.querySelector('#ritual')


color.addEventListener('click', function favColor() {
    alert('My favorite color is GREEN!')
})

place.addEventListener('click', function favPlace() {
    alert('My favorite place is A RACE TRACK!')
})

ritual.addEventListener('click', function favRitual() {
    alert('My favorite ritual is PRAYER!')
})