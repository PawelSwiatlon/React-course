import React, { Component } from 'react';
import classes from './ToDoList.module.css'
import ToDoForm from '../ToDoForm/ToDoForm'
import ToDoItem from '../ToDoItem/ToDoItem'

class ToDoList extends Component {
    state = {
        todoList: [],
        draft: " "
    }
    componentDidMount() {
        const resoult = localStorage.getItem('ToDoList')
        if(resoult != null){
            this.setState({todoList: JSON.parse(resoult)})
        }
    }
    componentDidUpdate() {
        localStorage.setItem("ToDoList", JSON.stringify(this.state.todoList))
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
            const d = new Date()
            todoList.push({ 
                id: Math.floor(Math.random() * 100),
                done: false,
                text: this.state.draft,
                data: d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
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
    doneHandler = (id) => {
        const todoList = [...this.state.todoList];
        todoList[id].done = !todoList[id].done
        this.setState({todoList: todoList, draft: ""})
        
    }
    render(){
        return(
            <div className={classes.todoList_box}>
                <section>
                <h1 className={classes.todoList_title}>ToDoList</h1>
                <ToDoForm 
                    onChange={this.updateDraftHandler} 
                    value={this.state.draft} 
                    onClick={this.addNewItemHandler} />
                </section>
                <div className={classes.todoItems_box}>
                    {this.state.todoList.map((item, id) => {return (
                        <ToDoItem 
                            key={item.id}
                            content={item.text}
                            remove={() => this.deleteItemHandler(id)}
                            rename={() => this.renameItemHandler(id)}                                doneChange={() => this.doneHandler(id)}
                            done={item.done}
                            data={item.data}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ToDoList;