const todos=JSON.parse(localStorage.getItem("todos"))||[];

const render = ()=>{
    const todoList=document.getElementById("todo-list")
    const todosTemplate = todos.map(t =>"<li>"+ t +"</li>")
    todoList.innerHTML=todosTemplate.join("")
    const elemetos = document.querySelectorAll("#todo-list li")
    // nos permite buscar por clases id's etc
    // document.querySelectorAll("#todo-list {"si colocas un espacio puedes especificar que etiqueta quieres seleccionar"})
    
    const actualizaTodos = (todos) =>{
        const todoStrings = JSON.stringify(todos);
        localStorage.setItem("todos", todoStrings)
    }
    
    elemetos.forEach((elemento, i)=>{
        elemento.addEventListener("click",()=>{
            elemento.parentNode.removeChild(elemento)
            todos.splice(i,1)
            actualizaTodos(todos)
            render()
        }) 
    })
}


window.onload=()=>{
    render()
    const form=document.getElementById('todo-form');
    form.onsubmit=(e)=>{
        e.preventDefault();
        const todo=document.getElementById("todo");
        const todoText=todo.value;
        todo.value="";
        todos.push(todoText);
        const todoStrings = JSON.stringify(todos);
        localStorage.setItem("todos", todoStrings)
        render();
    }
}