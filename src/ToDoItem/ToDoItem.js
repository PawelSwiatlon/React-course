import React from 'react';
import classes from '../ToDoList/ToDoList.module.css'

const ToDoItem = (props) => (
    <div className={classes.todoItem_box}>
        <p className={classes.todoItem_content}>{props.content}</p>
        <div className={classes.todoItem_boxButton}>
            <button className={classes.todoItem_deleteButton} onClick={props.delete}>Delete</button>
            <button className={classes.todoItem_renameButton} onClick={props.rename}>Edit</button>
        </div>
    </div>
)

export default ToDoItem;