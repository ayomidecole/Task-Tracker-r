const addBtn = document.getElementById('add-task');
const input = document.getElementById('new-task');
const taskList = document.querySelector('#task-list ul');

addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;
  taskList.appendChild(li);

  input.value = '';
});
