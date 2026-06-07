let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

const form = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");
const listUl = document.querySelector("#todoList");
const itemsLeftSpan = document.querySelector("#itemsLeft");

function saveAndRender() {
    localStorage.setItem("todos", JSON.stringify(todos));
    
    listUl.innerHTML = ""; 

    let filteredTodos = todos.filter(t => {
        if (currentFilter === "active") return !t.completed;
        if (currentFilter === "completed") return t.completed;
        return true;
    });

    filteredTodos.forEach(todo => {
        const li = document.createElement("li");
        li.className = `list-group-item d-flex justify-content-between align-items-center cursor-pointer ${todo.completed ? 'todo-completed' : ''}`;
        li.dataset.id = todo.id;

        const textSpan = document.createElement("span");
        textSpan.className = "todo-text flex-grow-1";
        textSpan.textContent = todo.text; 
        li.appendChild(textSpan);
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.className = "btn btn-sm btn-link text-decoration-none delete-btn";
        deleteBtn.textContent = "❌";
        li.appendChild(deleteBtn);

        listUl.appendChild(li);
    });

    const activeCount = todos.filter(t => !t.completed).length;
    itemsLeftSpan.textContent = `${activeCount} items left`;
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const textVal = input.value.trim(); 
    
    if (!textVal) return; 

    todos.push({
        id: Date.now(),
        text: textVal,
        completed: false
    });

    input.value = ""; 
    saveAndRender();  
});

listUl.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    const id = Number(li.dataset.id);

    if (e.target.classList.contains("delete-btn")) {
        todos = todos.filter(t => t.id !== id);
        saveAndRender();
    }
    else {
        todos = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
        saveAndRender();
    }
});

const filterButtons = [
    { id: "#filterAll", value: "all" },
    { id: "#filterActive", value: "active" },
    { id: "#filterCompleted", value: "completed" }
];

filterButtons.forEach(btn => {
    document.querySelector(btn.id).addEventListener("click", function() {
        filterButtons.forEach(b => {
            const el = document.querySelector(b.id);
            el.classList.remove("active", "fw-bold");
        });
        this.classList.add("active", "fw-bold");
        currentFilter = btn.value;
        render();
    });
});

document.querySelector("#clearCompleted").addEventListener("click", () => {
    todos = todos.filter(t => !t.completed);
    saveAndRender();
});

saveAndRender();