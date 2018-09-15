import React from 'react';

const DisplayTodos = ({todoList, changeStatus, deleteTodo}) => {
    if ( todoList.length !== 0 ) {
        const todoDisplay = todoList.map((todo) => {
            return(
                <div className={todo.status} >
                    <h2 className="todoTitle">{todo.title}</h2>
                    <p className="todoBody">{todo.body}</p>
                    <button class="doneButton btn" onClick={() => {changeStatus(todo.id, "done")}}>Done</button>
                    <button class="failButton btn" onClick={() => {changeStatus(todo.id, "fail")}}>Not Done</button>
                    <button class="deleteButton btn" onClick={() => {deleteTodo(todo.id)}}>Delete Todo</button>
                </div>
            );
        });

        return(<div class="todoCont" >{todoDisplay}</div>);
    } else {
        return(<div className = "todoCont"><h1 class="noTodo">No Todos to display. Add some todos from above form</h1></div>);
    }
}

export default DisplayTodos;