const TodoDisplay = (props) => {

    const todoClasses = ["bold", "italic"];

    if (props.todo.complete) {
        todoClasses.push("line-through");
    }


    return (
        <div>
            <div style={{marginTop: "10px"}}>
                <input onChange={(event) => {
                    props.handleToggleTodoComplete(props.i);
                }} checked={props.todo.complete} type="checkbox" />
                <span className={todoClasses.join(" ")}>{props.todo.text}</span>
                <button style={{marginLeft: "10px"}} onClick={(event) => {
                    props.handleTodoDelete(props.i);
                }}>Delete</button>
            </div>
        </div>
    )
}

export default TodoDisplay;