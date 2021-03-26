import * as React from 'react'
import TodoItem from './ToDoItem'
import {TodoListInterface} from '../interface'

const ToDoList = (props: TodoListInterface) => {
    return (
        <div className="todo-list">
            <ul className="list-group">
                {props.todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        <TodoItem
                            todo={todo}
                            handleTodoUpdate={props.handleTodoUpdate}
                            handleTodoRemove={props.handleTodoRemove}
                            handleTodoComplete={props.handleTodoComplete}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ToDoList
