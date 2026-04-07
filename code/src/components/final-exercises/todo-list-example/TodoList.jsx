import { useEffect, useRef } from "react";
import "./TodoList.css";

export default function TodoList() {
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const errorRef = useRef(null);
  const counterRef = useRef(null);
  const filterRef = useRef(null);

  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let currentFilter = "all";

  useEffect(() => {
    const input = inputRef.current;
    const list = listRef.current;
    const errorMsg = errorRef.current;
    const counter = counterRef.current;
    const filterContainer = filterRef.current;

    function saveTodos() {
      localStorage.setItem("todos", JSON.stringify(todos));
    }

    function updateCounter() {
      const completed = todos.filter(t => t.completed).length;
      counter.textContent = `${completed} of ${todos.length} tasks completed`;
    }

    function renderTodos() {
      list.innerHTML = "";

      let filtered = todos.filter(todo => {
        if (currentFilter === "active") return !todo.completed;
        if (currentFilter === "completed") return todo.completed;
        return true;
      });

      filtered.forEach(todo => {
        const li = document.createElement("li");
        li.className = "todo-item" + (todo.completed ? " completed" : "");
        li.dataset.id = todo.id;

        li.innerHTML = `
          <input type="checkbox" ${todo.completed ? "checked" : ""} />
          <span>${todo.text}</span>
          <button class="delete-btn">X</button>
        `;

        list.appendChild(li);
      });

      updateCounter();
    }

    function validateInput(text) {
      if (!text.trim()) {
        input.classList.add("error");
        errorMsg.textContent = "Task cannot be empty.";
        errorMsg.classList.remove("hidden");
        return false;
      }

      input.classList.remove("error");
      errorMsg.classList.add("hidden");
      return true;
    }

    function addTodo() {
      const text = input.value;

      if (!validateInput(text)) return;

      todos.push({
        id: Date.now(),
        text,
        completed: false
      });

      input.value = "";
      saveTodos();
      renderTodos();
    }

    const addBtn = document.getElementById("add-btn");
    addBtn.addEventListener("click", addTodo);

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") addTodo();
    });

    list.addEventListener("click", (e) => {
      const item = e.target.closest(".todo-item");
      if (!item) return;

      const id = Number(item.dataset.id);
      const todo = todos.find(t => t.id === id);

      if (e.target.classList.contains("delete-btn")) {
        todos = todos.filter(t => t.id !== id);
      }

      if (e.target.type === "checkbox") {
        todo.completed = e.target.checked;
      }

      saveTodos();
      renderTodos();
    });

    filterContainer.addEventListener("click", (e) => {
      if (!e.target.dataset.filter) return;

      [...filterContainer.children].forEach(btn =>
        btn.classList.remove("active")
      );

      e.target.classList.add("active");
      currentFilter = e.target.dataset.filter;
      renderTodos();
    });

    renderTodos();
  }, []);

  return (
    <div className="app">
      <h1>Todo List</h1>

      <p ref={errorRef} className="error hidden"></p>

      <div className="input-group">
        <input ref={inputRef} type="text" placeholder="Add a task..." />
        <button id="add-btn">Add</button>
      </div>

      <div ref={filterRef} className="filters">
        <button data-filter="all" className="active">All</button>
        <button data-filter="active">Active</button>
        <button data-filter="completed">Completed</button>
      </div>

      <ul ref={listRef} id="todo-list"></ul>

      <p ref={counterRef}></p>
    </div>
  );
}