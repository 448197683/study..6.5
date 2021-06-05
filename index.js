const box = document.getElementById(`box`);
console.log(box);
window.addEventListener('keydown', function () {
  console.log('red')
  box.style.backgroundColor = 'red'
})
window.addEventListener('keyup', function () {
  console.log(`brown`)
  box.style.backgroundColor = 'brown'
})
document.addEventListener('dragend', function () {
  box.style.backgroundColor = 'black'
})