import React, {useReducer, useState} from "react";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

//FUNCTION
function Reducer() {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1);
    }
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    let navigate = useNavigate()

    function goToOpening() {
        navigate('/')
    }
    function goToHooks() {
        navigate('/hooks')
    }
    function goToPrevious() {
        navigate('/usestate1')
    }
    // function goToNext() {
    //     navigate('/usestate3')
    // }

    //RETURN
    return (
        <Box sx={{width: '95%', p: 2, backgroundColor: 'white'}}>

            <div>
                <h1>useReducer Hook III</h1>
                <hr></hr>

                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>

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
