// Import components
import React, {Component} from 'react';
import DisplayTodos from './Components/DisplayTodos';
import AddTodo from './Components/AddTodo';
// Import styles
import './App.css';


class App extends Component {

    state = {
        todoList: [
            {title: "First Todo", body: "This is the first todo", status: "remaining", id: 1},
            {title: "Success Todo", body: "This todo is done", status: "done", id: 2},
            {title: "Fail Todo", body: "This is the first todo", status: "fail", id: 3}
        ],
    }

    // Add a todo
    addTodo = (todo) => {
        todo.id = Math.random();
        const newTodoList = [todo, ...this.state.todoList]
        this.setState({
            todoList: newTodoList,
        });
    };

    // Change the status of the todo
    changeStatus = (id, status) => {
        const newTodoList = this.state.todoList.map((todo) => {
            if (todo.id === id) {
                todo.status = status;
            }
            return todo;
        });

        this.setState({
            todoList: newTodoList,
        });
    };

    // Delete a todo
    deleteTodo = (id) => {
        const newTodoList = this.state.todoList.filter((todo) => {
            return (todo.id !== id);
        });

        this.setState({
            todoList: newTodoList,
        });
    }

    render() {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-yellow-lighter font-sans">
                <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <AddTodo addTodo={this.addTodo}/>
                    <DisplayTodos deleteTodo={this.deleteTodo} changeStatus={this.changeStatus}
                                  todoList={this.state.todoList}/>
                </div>
            </div>
        );
    }
};

export default App;