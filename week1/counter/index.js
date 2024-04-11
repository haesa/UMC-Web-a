const number = document.querySelector('#number');
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const handleClick = (event) => console.log(`${event.target.id}가 클릭됨`);

increase.addEventListener('click', (event) => {
  handleClick(event);
  number.innerText = parseInt(number.innerText, 10) + 1;
});
decrease.addEventListener('click', (event) => {
  handleClick(event);
  number.innerText = parseInt(number.innerText, 10) - 1;
});

console.log(number, increase, decrease);
