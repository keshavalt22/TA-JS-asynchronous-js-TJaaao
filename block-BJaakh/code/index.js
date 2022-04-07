// function main() {
//     let input = document.querySelector(`input[type="text"]`); 
//     let rootElm = document.querySelector(".todo_list");
    
//     let all = document.querySelector(".all");
//     let active = document.querySelector(".active");
//     let completed = document.querySelector(".completed");
//     let clear = document.querySelector(".clear");

//     let activeBtn = "all";

//     let allTodo = JSON.parse(localStorage.getItem("allTodo")) || [];
    
//     function handleInput (event) {
//         let value = event.target.value;
//         if(event.keyCode === 13 && value !== ""){
//             allTodo.push({
//                 name: value,
//                 isDone: false,
//             });
//             event.target.value = "";
//             createTodoUI(allTodo);
//             localStorage.setItem("allTodo", JSON.stringify(allTodo))
//         }
//     };
    
    
//     function deleteTodo (event) {
//         let id = event.target.dataset.id;
//         allTodo.splice(id, 1);
//         createTodoUI(allTodo);
//         localStorage.setItem("allTodo", JSON.stringify(allTodo))
//     }
    
//     function handleToggle(event){
//         let id = event.target.id;
//         allTodo[id].isDone = !allTodo[id].isDone;
//         createTodoUI(allTodo);
//         localStorage.setItem("allTodo", JSON.stringify(allTodo))
//     }
    
//     function createTodoUI(data = allTodo){
//         rootElm.innerHTML = "";
//         data.forEach((todo, i) =>{
//             let li = document.createElement("li");
//             let input = document.createElement("input");
//             input.type = "checkbox";
//             input.id = i;
//             input.checked = todo.isDone;
//             input.addEventListener("input", handleToggle);
//             let label = document.createElement("label");
//             label.for = i;
//             label.innerText = todo.name;
//             let span = document.createElement("span");
//             span.innerText = "x";
//             span.setAttribute("data-id", i);
//             span.addEventListener("click", deleteTodo
//             );
//             li.append(input,label,span);
//             rootElm.append(li);
//         })
//     }
    
//     createTodoUI(allTodo);

//     clear.addEventListener("click", () => {
//         allTodo = allTodo.filter((todo) => !todo.isDone);
//         createTodoUI();
//         activeBtn = "clear";
//         updatedActiveBtn();
//         localStorage.setItem("allTodo", JSON.stringify(allTodo))
//     });

//     active.addEventListener("click", () => {
//         let notCompleted = allTodo.filter((todo) => !todo.isDone);
//         createTodoUI(notCompleted);
//         activeBtn = "active";
//         updatedActiveBtn();
//     }); 

//     completed.addEventListener("click", () => {
//         let completedTodos = allTodo.filter((todo) => todo.isDone);
//         createTodoUI(completedTodos);
//         activeBtn = "completed";
//         updatedActiveBtn();
//     })
//     all.addEventListener("click", () => {
//         createTodoUI();
//         activeBtn = "all";
//         updatedActiveBtn();
//     })

    

//     function updatedActiveBtn(btn = activeBtn) {
//         all.classList.remove("selected");
//         active.classList.remove("selected");
//         completed.classList.remove("selected");
//         clear.classList.remove("selected");

//         if(btn === "all"){
//             all.classList.add("selected")
//         }
//         if(btn === "active"){
//             active.classList.add("selected")
//         }
//         if(btn === "completed"){
//             completed.classList.add("selected")
//         }
//         if(btn === "clear"){
//             clear.classList.add("selected")
//         }
//     }

//     updatedActiveBtn();

//     input.addEventListener("keyup",handleInput);
//     }
//     main();



let baseUrl = `https://basic-todo-api.vercel.app/api/todo`;

fetch(baseUrl)
.then((res) => res.json())
.then(console.log);

// let data = {
//     todo: {
//         title: 'Play',
//     }
// };

// fetch(baseUrl, {
//     method:'POST',
//     headers: {
//         'Content-type' : 'application/json',
//     },
//     body: JSON.stringify(data),
// })

fetch(baseUrl + "/624f49ecb4c76b000960900d",{
    method:'DELETE',
    headers: {
        'Content-type' : 'application/json',
    }
});