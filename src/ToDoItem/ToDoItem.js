import React from 'react';
import classes from './ToDoItem.module.css'

const ToDoItem = ({content,remove,rename,doneChange,done,data}) => (
    <div className={classes.todoItem_box}>
        <p className={classes.todoItem_data}>{data}</p>
        <input className={classes.todoItem_doneButton} onClick={doneChange} type="checkbox" checked={done ? 'checked':''}/>
        <p className={classes.todoItem_content} style={done ? {textDecoration: 'line-through', color: 'lime'} : {}}>{content}</p>
        <div className={classes.todoItem_boxButton}>
            <button onClick={rename}>Edit</button>
            <button onClick={remove}>Delete</button>
        </div>
    </div>
)

export default ToDoItem;