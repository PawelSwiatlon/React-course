import React, { Component } from 'react';
import classes from './ToDoList.module.css'

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
    addNewItemHandler = () => {
        if(this.state.draft.length > 1){
            const todoList = [...this.state.todoList];
            todoList.push({ 
                id: Math.floor(Math.random() * 100),
                done: false,
                text: this.state.draft
            })
            this.setState({todoList: todoList, draft: " "})
        }else {
            alert("Wpisz co kolwiek nie puse plz...")
        }
    }

    render(){
        return(
            <div className={classes.todoList_box}>
                <h1 className={classes.todoList_title}>ToDoList</h1>
                <div className={classes.todoList_addbox}>
                    <input type="text" onChange={this.updateDraftHandler} value={this.state.draft} className={classes.todoList_input} placeholder="Some Note.."/>
                    <button onClick={this.addNewItemHandler} className={classes.todoList_addButton}>+</button>
                </div>
                {this.state.todoList.map((item, id) => {
                    return (
                        <div key={item.id} className={classes.todoItem_box}>
                            <p className={classes.todoItem_content}>{item.text}</p>
                            <div className={classes.todoItem_boxButton}>
                                <button className={classes.todoItem_deleteButton} onClick={() => this.deleteItemHandler(id)}>Delete</button>
                                <button className={classes.todoItem_renameButton} onClick={() => {
                                    let t = prompt("Napisz nową zawartość i kliknij OK", item.text)
                                    if(t){
                                        const todoList = [...this.state.todoList];
                                        todoList[id].text = t
                                        this.setState({todoList: todoList, draft: ""})
                                    }
                                }}>Edit</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ToDoList;