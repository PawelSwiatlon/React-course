import React from 'react';

const ToDoItem = (props) => {
    return(
        <div>
            <p>{props.text}</p>
            <button onClick={props.delete}>x</button>
        </div>
    );
}

export default ToDoItem;