// create , add , delete , sort ,
// setup server
document.querySelector('form').addEventListener('submit',handleSbmitForm);

function handleSbmitForm(e)
{
    e.preventDefault();
    let elements = document.querySelectorAll('input');

    // for (let ele of elements)
    //     console.log(ele[0].value);
    if(elements[0].value=='')//check for name
        alert(" Please enter task name")
    else if(elements[1].value=='')//chec for description
        alert("Please enter the Description")
    else if(!Date.parse(elements[2].value))//check for date
        alert("Please eneter date")
    else
        alert("all good")
        addTodo(elements)
    elements[0].value=''
    elements[1].value=''
    elements[2].value=''
}


function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = 
    `  
        <span class="todo-name col-6-md">${todo[0].value}</span>
        <span class="todo-date col-6-md">${todo[1].value}</span>

        <div class="todo-description">${todo[2].value}</div>
        
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton" ><i class="fas fa-trash"></i></button>
    `;
    li.classList.add('todo-list-item');
    ul.appendChild(li);
}


document.querySelector('ul').addEventListener('click',handleClick)

function handleClick(e)
{
    if(e.target.name=="checkButton")
        checkTodo(e);
    else
        deleteTodo(e);
}

function checkTodo(e)
{
    let item = e.target.parentNode;
    console.log(item + "is being checked out")
    if(item.style.textDecoration=='none')
        item.style.textDecoration='line-through';
    else
        item.style.textDecoration='none';
}

function deleteTodo(e)
{
    let item = e.target.parentNode;
    item.remove();
}