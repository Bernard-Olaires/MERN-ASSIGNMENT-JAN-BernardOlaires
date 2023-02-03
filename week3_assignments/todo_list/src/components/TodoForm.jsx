const TodoForm = (props) => {
    return (
        <div>
            <form onSubmit={ (event) => {
                props.handleNewTodoSubmit(event);
            }}>
                <input onChange={(event) => {
                props.setNewTodo(event.target.value)
                }} 
                type="text" 
                value={props.newTodo}
                />
                <div>
                <button>Add</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;