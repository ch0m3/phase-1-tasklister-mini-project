document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")
  //const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector('#new-task-description')
    const taskList = document.querySelector('#tasks')

    const li = document.createElement('li')
    li.textContent = input.value;
    taskList.appendChild(li);
  })
});
