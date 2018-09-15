import React, { Component } from 'react';

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

        if ( title.length == 0 ) {
            this.refs.titleError.innerHTML = "Enter a title.";
            a = 1;
        } else {
            this.refs.titleError.innerHTML = "";
        }

        if ( body.length == 0 ) {
            this.refs.bodyError.innerHTML = "Enter a body for your todo.";
            a = 1;
        } else {
            this.refs.bodyError.innerHTML = "";
        }


        return (a==1)?false:true;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if ( this.handleValidation() ) { 
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
        return(
            <div className="formCont">
                <p ref="msg" >Enter a new Todo</p>
                <h3>Add a Todo</h3>
                <form onSubmit={this.handleSubmit}>
                    <p class="error" ref="titleError"></p>
                    <input ref="title" type="text" placeholder="Title" id="title" onChange={this.handleChange} ></input>
                    <p class="error" ref="bodyError"></p>
                    <input ref="body" type="text" placeholder="Details" id="body" onChange={this.handleChange} ></input>
                    <input type="submit" value="Create Todo"></input>
                </form>
            </div>
        );
    }

}

export default AddTodo;