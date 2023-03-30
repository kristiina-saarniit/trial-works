import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import EffectComponent from "../components/EffectComponent";


//FUNCTION
function Effect() {

    let navigate = useNavigate()

    function goToOpening() {
        navigate('/')
    }

    function goToHooks() {
        navigate('/hooks')
    }

    const [flag, setFlag] = useState(true)

    //RETURN
    return (
        <Box sx={{width: '95%', p: 2, backgroundColor: 'white'}}>

            <div>
                <h1>useEffect Hook</h1>
                <hr></hr>

                <div>
                    <button onClick={() => setFlag(!flag)}>
                        Toggle Effect Component
                    </button>
                </div>
                {flag ? <EffectComponent/> : ''}
            </div>

            {/*Tagasi avalehele liikumise nupp*/}
            <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
                <Button onClick={goToHooks} variant='outlined' color='primary' sx={{m: 5}}>back to Hooks</Button>
                <Button onClick={goToOpening} variant='outlined' color='primary' sx={{m: 5}}>exit</Button>
            </Box>
        </Box>
    );

}

export default Effect;
