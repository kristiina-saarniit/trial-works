import React, {useReducer, useState} from "react";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Todo from '../components/Todo'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
//    ekspordime selle konstandi sellepärast, et Todo.js komponendis on seda vaja
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            //toggl funktsionaalsuse kirjutame siia recuderi sisse:
            return todos.map(todo => {
                //kontroll, kas todo.id id on võrdne käesoleva id-ga
                if (todo.id === action.payload.id) {
                    //muudetakse vastavalt kas true'ks või false'iks
                    return {...todo, complete: !todo.complete}
                }
                //juhul, kui ei ole võrdne käesoleva Todo-ga tagastatakse Todo nii nagu ta on, sest me ei soovi seda muuta
                return todo
            })
        case ACTIONS.DELETE_TODO:
           return todos.filter(todo => todo.id !== action.payload.id)
            default:
                return todos

    }
}

function newTodo(name) {
    return {id: Date.now(), name: name, complete: false}
}

//FUNCTION
function Reducer() {

    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e) {
        //kõigepealt ütleme, et lehte ei refreshitaks:
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
        setName('')
    }

    console.log(todos)

    let navigate = useNavigate()

    function goToOpening() {
        navigate('/')
    }

    function goToHooks() {
        navigate('/hooks')
    }

    function goToPrevious() {
        navigate('/usereducer4')
    }

    // function goToNext() {
    //     navigate('/usereducer6')
    // }

    //RETURN
    return (
        <Box sx={{width: '95%', p: 2, backgroundColor: 'white'}}>

            <div>
                <h1>useReducer Hook V</h1>
                <p>Practising with Kyle</p>

                <hr></hr>

                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder= 'Insert your Todo'
                            value={name}
                            onChange={e => setName(e.target.value)}/>
                    </form>
                    {todos.map(todo => {
                        //    järgnevalt loome eraldi komponendi Todo.js, mille siin välja kutsume:
                        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
                    })}
                </div>

            </div>

            <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
                <Button onClick={goToHooks} variant='outlined' color='primary' sx={{m: 5}}>back to Hooks</Button>
                <Button onClick={goToPrevious} variant='outlined' color='primary' sx={{m: 5}}>previous example</Button>
                {/*<Button onClick={goToNext} variant='outlined' color='primary' sx={{m: 5}}>next example</Button>*/}
                <Button onClick={goToOpening} variant='outlined' color='primary' sx={{m: 5}}>exit</Button>
            </Box>
        </Box>
    );

}

export default Reducer;
