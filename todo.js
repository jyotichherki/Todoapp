let todoList = [
  {
    item:'by milk', 
    dueDate: '23/07/2026'
  },
  {
    item: 'go to college',
    dueDate: '23/07/2026'
  }
];
displayItems();

function addTodo() {
    let inputElement = document.querySelector
    ('#todo-input');
    let dateElement = document.querySelector
    ('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate:
    todoDate});
    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i =0; i < todoList.length; i++) {
        // let Item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;
        let {item, dueDate} = todoList[i];

        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class='btn-delete' onclick="todoList.
            splice(${i}, 1);
            displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML = newHtml;
}