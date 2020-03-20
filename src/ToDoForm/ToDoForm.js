import React from 'react';
import classes from '../ToDoList/ToDoList.module.css'

const ToDoForm = ({onChange,onClick,value}) => (
    <div className={classes.todoList_addbox}>
        <input type="text" onChange={onChange} value={value} className={classes.todoList_input} placeholder="Some Note.."/>
        <button onClick={onClick} className={classes.todoList_addButton}>+</button>
    </div>
)

export default ToDoForm;