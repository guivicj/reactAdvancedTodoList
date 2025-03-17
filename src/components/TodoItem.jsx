export default function TodoItem({todo, index, toggleComplete, removeTodo}) {
    return (
        <li className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(index)}>{todo.text}</span>
            <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
    );
}