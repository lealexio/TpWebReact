import * as React from 'react'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
import {TodoInterface} from './interface'

const App: React.FC = () => {
    const [todos, setTodos] = React.useState<TodoInterface[]>([])

    // Create
    function handleTodoCreate(todo: TodoInterface) {
        const newTodosState: TodoInterface[] = [...todos]
        newTodosState.push(todo)
        setTodos(newTodosState)
    }

    // Update an element from ID
    function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {

        const newTodosState: TodoInterface[] = [...todos]

        newTodosState.find((todo: TodoInterface) => todo.id === id)!.name = event.target.value

        setTodos(newTodosState)
    }

    // Remove an element from ID
    function handleTodoRemove(id: string) {

        const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)

        setTodos(newTodosState)
    }

    // Change state from complete to not complete of an element from ID
    function handleTodoComplete(id: string) {
        const newTodosState: TodoInterface[] = [...todos]
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
        setTodos(newTodosState)
    }

    return (
        <div className="App container">
            <React.Fragment>
                <div className="card text-center mt-5">
                    <div className="card-header">
                        <h2>Bières à gouter</h2>
                    </div>
                    <div className="card-body">
                        <ToDoForm todos={todos} handleTodoCreate={handleTodoCreate}/>
                    </div>
                    <div className="card-footer">
                        <ToDoList todos={todos} handleTodoUpdate={handleTodoUpdate} handleTodoRemove={handleTodoRemove} handleTodoComplete={handleTodoComplete}/>
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}
export default App;
