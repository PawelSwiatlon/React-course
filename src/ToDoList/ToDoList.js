import React, { Component } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem'

class ToDoList extends Component {
    state = {
        todoList: [
            { id: "1", done: false, text: "test1"},
            { id: "2", done: false, text: "test2"},
            { id: "3", done: false, text: "test3"},
            { id: "4", done: false, text: "test4"}
        ],
        draft: " "
    }
    deleteItemHandler = (id) => {
        const todoList = [...this.state.todoList];
        todoList.splice(id, 1)
        this.setState({todoList: todoList})
    }
    updateDraftHandler = (e) => {
        this.setState({draft: e.target.value})
    }
    addNewitemHandler = () => {
        const todoList = [...this.state.todoList];
        todoList.push({ 
            id: Math.floor(Math.random() * 100),
            done: false,
            text: this.state.draft
        })
        this.setState({todoList: todoList, draft: " "})
    }

    render(){
        return(
            <div>
                <h1>ToDoList</h1>
                <div>
                    <input type="text" onChange={this.updateDraftHandler} value={this.state.draft}/>
                    <button onClick={this.addNewitemHandler}>Add</button>
                </div>
                {this.state.todoList.map((item, id) => {
                    return (
                        <div key={item.id}>
                            <p>{item.text}</p>
                            <button onClick={() => this.deleteItemHandler(id)}>x</button>
                            <button onClick={() => {
                                let t = prompt("", item.text)
                                if(t){
                                    const todoList = [...this.state.todoList];
                                    todoList[id].text = t
                                    this.setState({todoList: todoList, draft: ""})
                                }
                            }}>y</button>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ToDoList;