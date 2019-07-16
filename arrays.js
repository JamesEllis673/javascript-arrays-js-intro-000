var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray (array, element) {
  const newArray = array
  newArray.unshift(element)
  return (newArray)
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return (array)
}

function addElementToEndOfArray (array, element) {
  const newArray = array
  newArray.push(element)
  return (newArray)
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return (array)
}

function accessElementInArray (array, index){
  return (array[index])
}

function removeElementFromBeginningOfArray (array) {
  const newArray = array
  newArray.shift()
  return (newArray)
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return (array)
}

function removeElementFromEndOfArray (array) {
  const newArray = array
  newArray.pop()
  return (newArray)
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return (array)
}
