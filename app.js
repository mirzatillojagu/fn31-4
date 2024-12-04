// const input = document.querySelector('input')
// const input2 = document.querySelector('#input2');
// const title1 = document.querySelector('#title1');
// const content = document.querySelector('#content');

// input2.oninput = (e) => {
//   const color = e.target.value;
//   title.style.color = color;
//   content.style.color = color;
//   title1.style.color = color
// };

// input.oninput = (e)=> {
//     const color = e.target.value
//     document.body.style.backgroundColor = color
// }



// 2 fodball

const ball = document.querySelector("#ball");

document.body.addEventListener("click", function (e) {
  const x = e.clientX - ball.offsetWidth / 2;
  const y = e.clientY - ball.offsetHeight / 2;

  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
});



// 3 


// const btn1 = document.querySelector('#btn1')
// const btn2 = document.querySelector('#btn2')
// const body = document.querySelector('body')
// const lorem = document.querySelector('.lorem')

// lorem.style.marginTop = '300px'

// btn1.style.padding = '6px'
// btn1.style.borderRadius = '10px' 
// btn1.style.backgroundColor = 'white'
// btn1.style.marginRight = '10px'


// btn2.style.padding = '6px'
// btn2.style.borderRadius = '10px' 
// btn2.style.backgroundColor = 'white'





// btn1.addEventListener('click', function(){
//     body.style.backgroundColor = 'black'

// })

// btn2.addEventListener('click', function(){
//     body.style.backgroundColor = 'white'

// })