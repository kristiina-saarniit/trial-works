import React from "react";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import axios from "axios";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import {Stack} from "@mui/material";

// export const ArtistsContext = createContext(null);
//creating an empty pot


function Writers() {

    let navigate = useNavigate()

    function goToOpening() {
        navigate('/')
    }

    return (

        <Box sx={{width: '95%', p: 2, backgroundColor: 'white'}}>
            <Typography variant="h4" align='center' sx={{m: 10}}>
                Find books
            </Typography>

            <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
                <CircularProgress/>
            </Box>

            <Typography variant="h5" align='center' sx={{m: 10}}>
               Under development
            </Typography>

            <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
                <Button onClick={goToOpening} variant='outlined' color='primary' sx={{m: 5}}>exit</Button>
            </Box>
        </Box>

    );

}

export default Writers;
