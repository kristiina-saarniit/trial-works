import React, {useReducer, useState} from "react";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

const initialState = [
    {id: Date.now(), name: 'Kristiina', email: 'kr.saarniit@gmail.com'}
]

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        case 'delete':
            return state.filter(contact => {
                return contact.id !== action.payload.id
            })
        default:
            throw new Error()
    }

}

//FUNCTION
function Reducer() {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    console.log(state)
    const addContact = (e) => {
        e.preventDefault()
        //selle ülemise käsklusega lehte ei refreshita
        const contact = {
            id: Date.now(),
            name,
            email,
        }
        //kahe järgmise reaga tühjendame vormi peale sisestamist
        setName('')
        setEmail('')
        dispatch({type: 'add', payload: contact})
    }

    let navigate = useNavigate()

    function goToOpening() {
        navigate('/')
    }

    function goToHooks() {
        navigate('/hooks')
    }

    function goToPrevious() {
        navigate('/usereducer1')
    }

    function goToNext() {
        navigate('/usereducer3')
    }

    //RETURN
    return (
        <Box sx={{width: '95%', p: 2, backgroundColor: 'white'}}>

            <h1>useReducer Hook II</h1>
            <p>Practising with Malvia</p>

            <hr></hr>
            <form onSubmit={addContact}>
                <input
                    type='text'
                    placeholder='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <hr></hr>
                <input
                    type='text'
                    placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <hr></hr>
                <button>Add Contact</button>
            </form>
            <div>
                <ul>
                    {state.map((contact) => {
                        return (
                            <li key={contact.id}>
                                <h4>{contact.name}</h4>
                                <h4>{contact.email}</h4>
                                <div>
                                    <button
                                        onClick={() => dispatch({type: 'delete', payload: {id: contact.id}})}>Delete
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/*Tagasi avalehele liikumise nupp*/
            }
            <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
                <Button onClick={goToHooks} variant='outlined' color='primary' sx={{m: 5}}>back to Hooks</Button>
                <Button onClick={goToPrevious} variant='outlined' color='primary' sx={{m: 5}}>previous example</Button>
                <Button onClick={goToNext} variant='outlined' color='primary' sx={{m: 5}}>next example</Button>
                <Button onClick={goToOpening} variant='outlined' color='primary' sx={{m: 5}}>exit</Button>
            </Box>
        </Box>
    )
        ;

}

export default Reducer;
