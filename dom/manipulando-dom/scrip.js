
import checkComplete from "./checkComplete.js"
import deleteIcon from "./deleteIcon.js";
const btn = document.querySelector('[data-form-btn]');
const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  const task = document.createElement("li");
  const list = document.querySelector("[data-list]");
  task.classList.add("card");
  input.value = "";
  const taskContent = document.createElement("div");
  taskContent.appendChild(checkComplete());
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(titleTask);
  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  list.appendChild(task);


  //task.innerHTML = content;


}


btn.addEventListener('click', createTask);


