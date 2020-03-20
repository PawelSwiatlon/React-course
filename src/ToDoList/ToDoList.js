import React, { Component } from 'react';
import classes from './ToDoList.module.css'
import ToDoForm from '../ToDoForm/ToDoForm'
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
    renameItemHandler = (id) => {
        let t = prompt("Napisz nową zawartość i kliknij OK", this.state.todoList[id].text)
        if(t){
            const todoList = [...this.state.todoList];
            todoList[id].text = t
            this.setState({todoList: todoList, draft: ""})
        }
    }
    render(){
        return(
            <div className={classes.todoList_box}>
                <h1 className={classes.todoList_title}>ToDoList</h1>
                <ToDoForm 
                    onChange={this.updateDraftHandler} 
                    value={this.state.draft} 
                    onClick={this.addNewItemHandler} />
                {this.state.todoList.map((item, id) => {return (
                    <ToDoItem 
                        key={item.id}
                        content={item.text}
                        delete={() => this.deleteItemHandler(id)}
                        rename={() => this.renameItemHandler(id)}/>);
                })}
            </div>
        );
    }
}

export default ToDoList;