import React, {useState, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

//FUNCTION
function Memo() {

    let navigate = useNavigate()

    function goToOpening() {
        navigate('/')
    }

    function goToHooks() {
        navigate('/hooks')
    }

    const [counter, setCounter] = useState(1)
    const result = useMemo(() => {
        return factorial(counter)
    },[counter])
    const [name, setName] = useState('')

    //RETURN
    return (
        <Box sx={{width: '95%', p: 2, backgroundColor: 'white'}}>

            <div>

                <h1>useMemo Hook</h1>
                <p>Practising with Malvia</p>
                <hr></hr>

                <h1>
                    Factorial of {counter} is: <span>{result}</span>
                </h1>
                <div>
                    <Button onClick={() => setCounter(counter - 1)}>Decrement</Button>
                    <Button onClick={() => setCounter(counter + 1)}>Inrement</Button>
                </div>
                <hr></hr>
                <div>
                    <div>
                        <label>Enter Name</label>
                    </div>
                    <input
                        type='text'
                        placeholder='enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <hr></hr>

                    <DisplayName name={name}></DisplayName>

                </div>
            </div>

            {/*Tagasi avalehele liikumise nupp*/}
            <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
                <Button onClick={goToHooks} variant='outlined' color='primary' sx={{m: 5}}>back to Hooks</Button>
                <Button onClick={goToOpening} variant='outlined' color='primary' sx={{m: 5}}>exit</Button>
            </Box>
        </Box>
    );
}
const  DisplayName = React.memo(({name}) => {
    console.log('rendered')
    return <p>{`My name is ${name}`}</p>
})

function factorial(n) {
    let i = 0;
    while (i < 200000000) i++
    if (n < 0) {
        return -1
    }
    if (n === 0) {
        return 1
    }
    return n * factorial(n - 1)
}

export default Memo;
