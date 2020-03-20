import React from 'react';
import classes from '../ToDoList/ToDoList.module.css'

const ToDoItem = ({content,remove,rename,doneChange,done}) => (
    <div className={classes.todoItem_box}>
        <p className={classes.todoItem_content} style={done ? {textDecoration: 'line-through', color: 'lime'} : {}}>{content}</p>
        <div className={classes.todoItem_boxButton}>
            <button className={classes.todoItem_deleteButton} onClick={remove}>Delete</button>
            <button onClick={doneChange}>Done</button>
            <button className={classes.todoItem_renameButton} onClick={rename}>Edit</button>
        </div>
    </div>
)

export default ToDoItem;