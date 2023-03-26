import React from "react";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import './App.css';
import {Typography} from "@mui/material";


function Opening() {

    let navigate = useNavigate()

    function goToShipments() {
        navigate('/shipments')
    }
    function goToShopping() {
        navigate('/shopping')
    }
    function goToWriters() {
        navigate('/writers')
    }
    function goToHooks() {
        navigate('/hooks')
    }

    return (
        <div className="App">
            <header className="App-header">

                <Typography variant='h2' align='center' sx={{m: 3}}>
                    Pick one
                </Typography>

                <Button onClick={goToShipments} variant='outlined' color='primary' sx={{m: 1}}>Shipments @Kuehne+Nagel</Button>
                <Button onClick={goToShopping} variant='outlined' color='primary' sx={{m: 1}}>E-Shop</Button>
                <Button onClick={goToWriters} variant='outlined' color='primary' sx={{m: 1}}>Authors and books</Button>
                <Button onClick={goToHooks} variant='outlined' color='primary' sx={{m: 1}}>Practising Hooks</Button>
                <Button href="https://react.dev/learn" variant='outlined' color='primary' sx={{m: 1}}>Learn React</Button>

            </header>
        </div>
    );
}

export default Opening;
