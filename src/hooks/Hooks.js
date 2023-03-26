import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
// import axios from "axios";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//FUNCTION
function Hooks() {

    let navigate = useNavigate()

    function goToUseState() {
        navigate('/usestate')
    }
    function goToUseEffect() {
        navigate('/useeffect')
    }
    function goToUseMemo() {
        navigate('/usememo')
    }
    function goToOpening() {
        navigate('/')
    }

    //RETURN
    return (
        <Box sx={{width: '95%', p: 2, backgroundColor: 'white'}}>
            {/*Lehe pealkiri*/}
            <Typography variant="h4" align='center' sx={{m: 10}}>
                Place to practise Hooks
            </Typography>

            {/*Tagasi avalehele liikumise nupp*/}
            <Box display='flex' flexDirection='row' justifyContent='center'>
                <Button onClick={goToUseState} variant='outlined' color='primary' sx={{m: 5}}>State</Button>
                <Button onClick={goToUseEffect} variant='outlined' color='primary' sx={{m: 5}}>Effect</Button>
                <Button onClick={goToUseMemo} variant='outlined' color='primary' sx={{m: 5}}>Memo</Button>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='center'>
                <Button onClick={goToOpening} variant='outlined' color='primary' sx={{m: 5}}>exit</Button>
            </Box>
        </Box>
    );

}

export default Hooks;
