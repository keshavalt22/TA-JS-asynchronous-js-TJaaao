let input = document.querySelector(`input[type="text"]`); 
let rootElm = document.querySelector(".todo_list");
let baseURL = `https://basic-todo-api.vercel.app/api/todo/`;


function deleteTodo (id) {
    fetch(baseURL + `${id}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(() => {
          displayTodos();
      });
}
function handleToggle (id, status) {
    let data = {
        todo : {
            isCompleted : !status
        }
    }
    fetch(baseURL + `${id}`, {
        method: 'put', 
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(data),
      }).then(() => {
          displayTodos();
      });
}

function handleEdit(event, id) {
    let p = event.target;
    let parent = event.target.parentElm;
    parent.replaceChild(input, p);
    let input = document.createElement("input");
    input.value = event.target.innerText;
    input.addEventListener('keyup', (event) => {
        if(event.keyCode === 13 && event.target.value){
            let data = {
                todo: {
                    title : event.target.value,
                },
            };
            fetch(baseURL + `${id}`, {
                method: 'put', 
                headers: {
                  'Content-Type': 'application/json'
                },
                body : JSON.stringify(data),
              }).then(() => {
                  displayTodos();
              });
        }
    })

}

function createTodoUI(data){
        rootElm.innerHTML = "";
        data.forEach((todo) =>{
            let li = document.createElement("li");
            let input = document.createElement("input");
            input.type = "checkbox";
            input.checked = todo.isCompleted;
            input.addEventListener('click', () => handleToggle(todo._id, todo.isCompleted))
            input.setAttribute("data-id", todo._id);
            let p = document.createElement('p');
            p.innerText = todo.title;
            p.addEventListener('dblclick', (event) => handleEdit(event, todo._id));
            let span = document.createElement("span");
            span.innerText = "x";
            span.addEventListener("click", () => deleteTodo(todo._id)
            );
            span.setAttribute("data-id", todo._id);
            li.append(input,p,span);
            rootElm.append(li);
        })
}
    
function displayTodos(id){
    fetch(baseURL).then(res => res.json())
    .then((allTodo) => {
    createTodoUI(allTodo.todos);
})
}


function handleInput (event) {
    if(event.keyCode === 13 && event.target.value.trim()){
        let data = {
            todo: {
                title : event.target.value,
                isCompleted: false,
            },
        };
        fetch(baseURL, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          }).then(() => {
              event.target.value = '';
              displayTodos();
          });
    }
};


input.addEventListener('keyUp', handleInput);

displayTodos();




