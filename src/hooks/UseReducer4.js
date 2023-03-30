import React, {useReducer} from "react";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

const ACTIONS = {
    // suurte tähtedega seetõttu, et see on globaalne muutumatu konstant
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state, action) {
    switch (action.type)
        //actionid on need tegevused, mida me saame teha actual state'iga
        // Siin on actionid kirjeldatud softcode'ina, st et konstantidena
    {
        case ACTIONS.INCREMENT:
            return {count: state.count + 1}
        case ACTIONS.DECREMENT:
            return {count: state.count - 1}
        default:
            return state
    }
}

//FUNCTION
function Reducer() {

    const [state, dispatch] = useReducer(reducer, {count: 0})

    function increment() {

        dispatch({type: ACTIONS.INCREMENT})
    }

    function decrement() {
        dispatch({type: ACTIONS.DECREMENT})
    }

    let navigate = useNavigate()

    function goToOpening() {
        navigate('/')
    }

    function goToHooks() {
        navigate('/hooks')
    }

    function goToPrevious() {
        navigate('/usereducer3')
    }

    function goToNext() {
        navigate('/usereducer5')
    }

    //RETURN
    return (
        <Box sx={{width: '95%', p: 2, backgroundColor: 'white'}}>

            <div>
                <h1>useReducer Hook IV</h1>
                <p>Practising with Kyle: useReducer soft-coded</p>

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
