import axios from 'axios';
import React from 'react';

function TodoItem(props){
    const deleteTodoHandler = (title) => {
        axios.delete(`http://localhost:8000/api/todo/${title}`)
        .then(res => console.log(res.data))
    }
    return (
        <div>
            <p>
                <span style={{ fontWeight: "bold, underline" }}>
                    {props.todo.title} : 
                </span> <span>{props.todo.description}</span>
                <button onClick={() => deleteTodoHandler(props.todo.title)}
                className="btn btn-outline-danger my-2 mx-2" style={{
                'borderRadius':'50px'}}>X</button>
            </p>
            <hr></hr>
        </div>
    )
}

export default TodoItem;