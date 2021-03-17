function getInputValue () {
  // Selecting the input element and get its value
  const inputVal = document.getElementById('text').value
  // Displaying the value
  alert(inputVal)
}
// detects wwhen button is pressed and activates the function
document.getElementById('button').addEventListener('click', getInputValue)
