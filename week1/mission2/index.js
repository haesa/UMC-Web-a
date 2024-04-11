const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todo = document.querySelector('#todo');
const completed = document.querySelector('#completed');
const todoList = [];
const completedList = [];

const createTodoItem = (value) => {
  const li = document.createElement('li');
  const p = document.createElement('p');
  const div = document.createElement('div');
  const button = document.createElement('button');

  p.innerText = value;
  button.addEventListener('click', () => {
    const completedItem = createCompletedItem(value);
    completed.append(completedItem);
    li.remove();
  });
  button.classList.add('button');
  button.innerText = '완료';
  div.append(button);
  li.classList.add('list-item');
  li.append(p, div);
  return li;
};

const createCompletedItem = (value) => {
  const li = document.createElement('li');
  const p = document.createElement('p');
  const div = document.createElement('div');
  const button = document.createElement('button');

  p.innerText = value;
  button.addEventListener('click', () => li.remove());
  button.classList.add('button');
  button.innerText = '삭제';
  div.append(button);
  li.classList.add('list-item');
  li.append(p, div);
  return li;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newItem = createTodoItem(event.target[0].value);
  todo.append(newItem);
  event.target[0].value = '';
});
