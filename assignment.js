const taskOne = document.querySelector('#task-1');
const taskOne2 = document.getElementById('task-1');

taskOne.style.backgroundColor = 'black';

taskOne.style.color = 'white';

const title = document.querySelector('title');
// title.textContent = 'Assignment - Solved!';

const codHead = document.head;
const titleTwo = document.head.querySelector('title');
titleTwo.textContent = 'Assignment - Solved!';

// const h1 = document.querySelector('h1');
// h1.textContent = 'Assignment - Solved!';

const h1 = document.getElementsByTagName('h1');
h1[0].textContent = 'Assignment - Solved!';


