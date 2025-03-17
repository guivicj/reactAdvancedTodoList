import './App.css';
import {useState} from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        const newTodos = [...todos, {text, completed: false}]
        setTodos(newTodos)
    }

    const toggleCompleted = (index) => {
        const newTodos = todos.map((todo, i) =>
            i === index ? {...todo, completed: !todo.completed} : todo
        )
        setTodos(newTodos)
    }

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="todo-container">
            <h1>To-do list</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList
                todos={todos}
                toggleComplete={toggleCompleted}
                removeTodo={removeTodo}
            />
        </div>
    );
}