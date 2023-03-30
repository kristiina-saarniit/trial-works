import React, {useReducer, useState} from "react";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

function reducer(state, action) {
    switch (action.type)
    //actionid on need tegevused, mida me saame teha actual state'iga
    {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        default:
            return state
    }
}
//FUNCTION
function Reducer() {

    const [state, dispatch] = useReducer(reducer, {count: 0})
    // const [count, setCount] = useState(0)
    //12 ja 13 rida on sisuliselt sama tähendsega
    function increment() {
        // setCount(prevCount => prevCount + 1);
        dispatch({type: 'increment'})
    }
    function decrement() {
        // setCount(prevCount => prevCount - 1)
        dispatch({type: 'decrement'})

    }

    let navigate = useNavigate()

    function goToOpening() {
        navigate('/')
    }
    function goToHooks() {
        navigate('/hooks')
    }
    function goToPrevious() {
        navigate('/usereducer2')
    }
    function goToNext() {
        navigate('/usereducer4')
    }

    //RETURN
    return (
        <Box sx={{width: '95%', p: 2, backgroundColor: 'white'}}>

            <div>
                <h1>useReducer Hook III</h1>
                <hr></hr>

                <button onClick={decrement}>-</button>
                <span>{state.count}</span>
                <button onClick={increment}>+</button>

            </div>

            <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
                <Button onClick={goToHooks} variant='outlined' color='primary' sx={{m: 5}}>back to Hooks</Button>
                <Button onClick={goToPrevious} variant='outlined' color='primary' sx={{m: 5}}>previous example</Button>
                <Button onClick={goToNext} variant='outlined' color='primary' sx={{m: 5}}>next example</Button>
                <Button onClick={goToOpening} variant='outlined' color='primary' sx={{m: 5}}>exit</Button>
            </Box>
        </Box>
    );

}

export default Reducer;
