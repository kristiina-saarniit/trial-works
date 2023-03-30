import React, {useReducer, useState} from "react";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

const initialState = 0

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            throw new Error()
    }

}

//FUNCTION
function Reducer() {

    // const [counter, setCounter] = useState(0)
    // const increment = () => {
    //     setCounter(counter + 1);
    // }
    // const decrement = () => {
    //     setCounter(counter - 1)
    // }

    const [state, dispatch] = useReducer(reducer, initialState)

    let navigate = useNavigate()

    function goToOpening() {
        navigate('/')
    }
    function goToHooks() {
        navigate('/hooks')
    }
    function goToNext() {
        navigate('/usereducer2')
    }

    //RETURN
    return (
        <Box sx={{width: '95%', p: 2, backgroundColor: 'white'}}>

            <div>
                <h1>useReducer Hook I</h1>
                <hr></hr>

                {/*<h2>{counter}</h2>*/}
                <h2>{state}</h2>
                <button onClick={() => dispatch({type:'increment'})}>Increment</button>
                <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>

            </div>

            {/*Tagasi avalehele liikumise nupp*/}
            <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
                <Button onClick={goToHooks} variant='outlined' color='primary' sx={{m: 5}}>back to Hooks</Button>
                <Button onClick={goToNext} variant='outlined' color='primary' sx={{m: 5}}>next example</Button>
                <Button onClick={goToOpening} variant='outlined' color='primary' sx={{m: 5}}>exit</Button>
            </Box>
        </Box>
    );

}

export default Reducer;
