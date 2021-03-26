import * as React from 'react'
import * as shortid from 'shortid' //ID generator
import {TodoInterface, TodoFormInterface} from '../interface'

const ToDoForm = (props: TodoFormInterface) => {

    const inputRef = React.useRef<HTMLInputElement>(null)

    const [values, setValues] = React.useState('')

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValues(event.target.value)
    }

    function handleInputEnter(event: React.KeyboardEvent) {
        // Check for 'Enter' key
        if (event.key === 'Enter' && inputRef.current && inputRef.current.value!='') {

            const newTodo: TodoInterface = {
                id: shortid.generate(),
                name: values,
                isCompleted: false
            }
            // Create new item
            props.handleTodoCreate(newTodo)
            // Reset the input field
            if (inputRef && inputRef.current) {
                inputRef.current.value = ''
            }
        }
    }

    function handleInputValidation() {

        if (inputRef.current && inputRef.current.value!='') {
            const newTodo: TodoInterface = {
                id: shortid.generate(),
                name: values,
                isCompleted: false
            }
            // Create new todo item
            props.handleTodoCreate(newTodo)
            // Reset the input field
            if (inputRef && inputRef.current) {
                inputRef.current.value = ''
            }
        }
    }

    return (
        <div className="input-group">
            <input className="form-control" ref={inputRef} type="text" placeholder='Ajouter une bière à gouter' onChange={event => handleInputChange(event)} onKeyPress={event => handleInputEnter(event)}/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={event => handleInputValidation()}>Ajouter</button>
            </div>
        </div>
    )
}
export default ToDoForm
