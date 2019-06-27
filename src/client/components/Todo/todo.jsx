import React, { Component } from 'react'
import Todoitem from "../Todo/todoItem";
import "../Todo/style.css";
import Addtodo from "../Todo/addTodo";

class Todo extends Component {
    state = {
        todo : [
            {id : "1", content : "Buy milk"},
            {id : "2", content : "Do yoga"},
            {id : "3", content : "Have dinner"},
            {id : "4", content : "Watch TV"}
        ]
    }
    deleteTodo = (id) => {
        let todo = this.state.todo.filter(todos => {
            return todos.id !== id
        })
        this.setState({
            todo
        })
    }
    handleSubmit= (e) => {
        e.preventDefault();
        let currentTodo = {}
        currentTodo.id = this.state.todo.length + 1;
        currentTodo.content = e.target.content.value;
        let todo = [...this.state.todo, currentTodo]
        this.setState({
                todo
        })
        e.target.content.value = ""
    }
    handleChange = () => {
        console.log("chang");
    }
    render() {
        return (
            <div className="container">
                <Todoitem
                todo={this.state.todo}
                deleteTodo={this.deleteTodo}
                />
                <Addtodo handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            </div>
        )
    }
}
export default Todo