import * as React from 'react'
import {TodoItemInterface} from '../interface'

const ToDoItem = (props: TodoItemInterface) => {
    return (
        <div className="input-group">
            <div className="input-group-prepend" onClick={() => props.handleTodoComplete(props.todo.id)}>
                <div className="input-group-text">
                {props.todo.isCompleted ? (
                    <span>J'ai bien bu</span>
                ) : (
                    <span>A tester</span>
                )}
                </div>
            </div>
            <input className="form-control" value={props.todo.name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todo.id)}/>
            <div className="input-group-append">
                <a className="btn btn-outline-secondary" target="_blank" href={"https://www.google.com/search?q="+props.todo.name.split(' ').join('+')+" bière"}>Go</a>
            </div>
            <div className="input-group-append" onClick={() => props.handleTodoRemove(props.todo.id)}>
                <button className="btn btn-outline-secondary" type="button">⨯</button>
            </div>

        </div>
    )
}
export default ToDoItem
