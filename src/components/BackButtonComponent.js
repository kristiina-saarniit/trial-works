import React from 'react';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

function BackButtonComponent() {

    let navigate = useNavigate()

    function goToOpening() {
        navigate('/')

        return (
            <div>
                <Button onClick={goToOpening} variant='outlined' color='primary' sx={{m: 10}}>exit & Back to the
                    beginning to Pick</Button>

            </div>
        );
    }
}
export default BackButtonComponent;
