// connect the button to the check function
document.getElementById('button').addEventListener('click', check)

let userInput = 0

function check () {
  // get the number that user typed turned into a integer
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  // looks if userInput is able to watch certain movies
  if (userInput >= 17) {
    document.getElementById('answer').innerHTML = 'you can watch R rated movies alone'
  } else if (userInput >= 13) {
    document.getElementById('answer').innerHTML = 'you can watch PG-13 movies alone'
  } else if (userInput >= 6) {
    document.getElementById('answer').innerHTML = 'you can watch G or PG movies alone'
  } else {
    document.getElementById('answer').innerHTML = "you're too young for most things, sorry"
  }
}
