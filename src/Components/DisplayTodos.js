import React from 'react';

const DisplayTodos = ({todoList, changeStatus, deleteTodo}) => {
    if (todoList.length !== 0) {
        const todoDisplay = todoList.map((todo) => {
            return (
                <div className="w-1/2 px-3 my-3" key={todo.id}>
                    <div className={todo.status + " rounded shadow-lg"}>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{todo.title}</div>
                            <p className="text-base">{todo.body}</p>
                        </div>
                        <div className="px-6 py-4">
                            <button
                                className="bg-blue hover:bg-blue-dark text-white font-bold text-xs py-2 px-4 rounded-full mr-3"
                                onClick={() => {
                                    changeStatus(todo.id, "done")
                                }}>Done
                            </button>
                            <button
                                className="bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded-full text-xs shadow mr-3"
                                onClick={() => {
                                    changeStatus(todo.id, "fail")
                                }}>Not Done
                            </button>
                            <button
                                className="bg-red hover:bg-red-dark text-white font-bold text-xs py-2 px-4 rounded-full"
                                onClick={() => {
                                    deleteTodo(todo.id)
                                }}>Delete Todo
                            </button>
                        </div>
                    </div>
                </div>
            );
        });

        return (<div className="px-3 mb-4"> <div className="flex flex-wrap -mx-3">{todoDisplay}</div></div>);
    } else {
        return (<h1 className="text-grey-darkest text-center">No Todos to display. Add some todos from above
            form</h1>);
    }
}

export default DisplayTodos;