import React, {useState} from "react";

const Todos = () => {
    const [todo, setTodo] = useState(['Go to job', 'Go to home'])
    const addTodo = () => {
        setTodo([...todo, 'new todo'])
    }
    const DeleteLastChange = () => {
        return (
            setTodo(todo.slice(0,-1))
        )
    }
    return (
        <div>
            <h1>Todos!</h1>
            <input type="text"/>
            <button onClick={addTodo}>New add</button>
            <button onClick={DeleteLastChange}>Delete</button>

            <ul>
                {
                    todo.map((el, idx) => <li key={idx}>{el}</li>)
                }
            </ul>
            {

            }
        </div>
    )

    }


export default Todos


// переменная useState => input value and  onChange =>