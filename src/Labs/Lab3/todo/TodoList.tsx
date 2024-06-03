import TodoItem from "./TodoItem";
import todos from "./todo.json";

const TodoList = () => {
    return (
        <>
            <h3>Todo List</h3>
            <ul className="list-group">
                {todos.map((todo) => <TodoItem todo={todo} />)}
            </ul><hr />


        </>
    );
}
export default TodoList;