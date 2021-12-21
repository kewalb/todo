import React, { useState } from 'react';
import Input from './input';
import Todo from './todo';

function List() {
    const [list, setList] = useState([]);

    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodo = [...list, todo]
        setList(newTodo)
        console.log(list) 
    }

    const removeList = (id) => {
        const remove = [...list].filter(lst => lst.id !== id)
        setList(remove)
    }

    const editItem = (id, value) => {
        if(!value.text || /^\s*$/.test(value.text)){
            return
        }
        setList(prev => prev.map(item => (item.id === id ? value : item)))
    }

    const completeTodo = (id) => {
        let updatedTodos = list.map(lst => {
            if(lst.id === id){
                lst.isComplete = !lst.isComplete
            }
            return lst;
        })
        setList(updatedTodos)
    }

    return (
        <div>
            <h1 className="mb-5">Task For Today?</h1>
            <Input onSubmit={addTodo} />
            <Todo list={list} completeTodo={completeTodo} removeList={removeList} editItem={editItem} />
        </div>
    )
}

export default List
