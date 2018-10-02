import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        title: "",
        body: "",
        status: "remaining"
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleValidation = () => {
        const title = this.state.title;
        const body = this.state.body;
        let a = 0;

        if (title.length === 0) {
            this.refs.titleError.innerHTML = "Enter a title.";
            a = 1;
        } else {
            this.refs.titleError.innerHTML = "";
        }

        if (body.length === 0) {
            this.refs.bodyError.innerHTML = "Enter a body for your todo.";
            a = 1;
        } else {
            this.refs.bodyError.innerHTML = "";
        }


        return (a !== 1);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.handleValidation()) {
            this.refs.title.value = "";
            this.refs.body.value = "";
            this.refs.msg.innerHTML = "Todo added successfully!"
            this.props.addTodo(this.state);
            this.setState({
                title: "",
                body: ""
            });
            setTimeout(() => {
                this.refs.msg.innerHTML = "Enter a new Todo";
            }, 3000);
        }
    }

    render() {
        return (
            <div>
                <h1 className="text-grey-darkest text-center" ref="msg">Todo List</h1>
                <form onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="flex">
                        <div className="w-1/2 mb-4 mr-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                                Title
                            </label>
                            <input ref="title" type="text" placeholder="Title" id="title" onChange={this.handleChange}
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
                            <p className="text-red text-xs italic" ref="titleError"></p>
                        </div>
                        <div className="w-1/2 mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                                Details
                            </label>
                            <input ref="body" type="text" placeholder="Details" id="body" onChange={this.handleChange}
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
                            <p className="text-red text-xs italic" ref="bodyError"></p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-dark hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                            type="submit">
                            Create Todo
                        </button>
                    </div>
                </form>
            </div>
        );
    }

}

export default AddTodo;