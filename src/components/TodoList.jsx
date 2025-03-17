import TodoItem from "./TodoItem";

export default function TodoList({todos, toggleComplete, removeTodo}) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                />
            ))}
        </ul>
    );
}