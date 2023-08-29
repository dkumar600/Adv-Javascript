//Event Propagation
// function clickP (e){
//     console.log(e.currentTarget)
// }
// const child = document.querySelector('.C');
// const parent = document.querySelector('.P');
// const Gparent = document.querySelector('.G');
// child.addEventListener('click',clickP);
// parent.addEventListener('click',clickP,true);
// Gparent.addEventListener('click',clickP,true);

//Event Deligation
console.log(document.querySelector('ul'))
document.querySelector('ul').addEventListener('click', function(event) {
    console.log(event)
    if (event.target.className === 'LI1') {
      console.log('Clicked on', event.target.textContent);
    }
  });
  