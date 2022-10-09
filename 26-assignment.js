let allien_color = 'green'

console.log(allien_color === 'green' ? 'the player just earned 5 points.' : '')

console.log(allien_color === 'red' ? 'the player just earned 5 points.' : '')

if (allien_color !== 'green') {
  console.log('the player just earned 10 points.')
}

if (allien_color === 'green') {
  console.log('the player just earned 10 points.')
} else {
  console.log('the player just earned 5 points.')
}
