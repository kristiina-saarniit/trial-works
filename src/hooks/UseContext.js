import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

function initialValue() {
    console.log('function called')
    return 0;
}

//FUNCTION
function State() {


    let navigate = useNavigate()

    function goToOpening() {
        navigate('/')
    }
    function goToHooks() {
        navigate('/hooks')
    }
    // function goToNext() {
    //     navigate('/usestate2')
    // }


    //RETURN
    return (
        <Box sx={{width: '95%', p: 2, backgroundColor: 'white'}}>

            <div>

                <h1>useContext Hook</h1>
                <p>Practising with Malvia</p>
                <hr></hr>

            </div>

            {/*Tagasi avalehele liikumise nupp*/}
            <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
                <Button onClick={goToHooks} variant='outlined' color='primary' sx={{m: 5}}>back to Hooks</Button>
                {/*<Button onClick={goToNext} variant='outlined' color='primary' sx={{m: 5}}>next example</Button>*/}
                <Button onClick={goToOpening} variant='outlined' color='primary' sx={{m: 5}}>exit</Button>
            </Box>
        </Box>
    );

}

export default State;
