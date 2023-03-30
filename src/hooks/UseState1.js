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

    const [name, setName] = useState('Kristiina')
    const [flag, setFlag] = useState(false)
    //Esimene variant:
    // const [steps, setSteps] = useState(0)
    //Teine variant, mida kasutatakse siis, kui on suuremahulised päringud:
    // const [steps, setSteps] = useState(() => {
    //     console.log('clicked')
    //     return 0
    // Kolmas variant, samuti suuremahulistele päringutele:
    const [steps, setSteps] = useState(initialValue)
    const [names, setNames] = useState([])

    let navigate = useNavigate()

    function goToOpening() {
        navigate('/')
    }
    function goToHooks() {
        navigate('/hooks')
    }
    function goToNext() {
        navigate('/usestate2')
    }


    function changeName() {
        console.log('clicked!')
        return setFlag(!flag);
    }

    function increment1() {
        return setSteps(steps + 1);
    }

    function decrement1() {
        return setSteps(steps - 1);
    }

    function increment2() {
        setSteps((prevState) => prevState + 1);
        setSteps((prevState) => prevState + 1);
    }

    function decrement2() {
        setSteps((prevState) => prevState - 1);
        setSteps((prevState) => prevState - 1);
    }

    function addNames(e) {
        e.preventDefault()
        setNames([...names, {id: names.length, name}])
        setName('')
    }

    //RETURN
    return (
        <Box sx={{width: '95%', p: 2, backgroundColor: 'white'}}>

            <div>

                <h1>useState Hook I</h1>
                <p>Practising with Malvia</p>
                <hr></hr>

                <div>Hello, {flag ? name : ''}!</div>
                <button onClick={changeName}>Click me</button>
                <hr></hr>

                <button onClick={increment1}>+</button>
                <div>{steps}</div>
                <button onClick={decrement1}>-</button>
                <hr></hr>

                <button onClick={increment2}>+</button>
                <div>{steps}</div>
                <button onClick={decrement2}>-</button>
                <hr></hr>

                <form onSubmit={addNames}>
                    <input
                        type='text'
                        value={name}
                        placeholder='add names'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button>Submit</button>
                </form>
                <hr></hr>

                <ul>
                    {names.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>

            </div>

            {/*Tagasi avalehele liikumise nupp*/}
            <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
                <Button onClick={goToHooks} variant='outlined' color='primary' sx={{m: 5}}>back to Hooks</Button>
                <Button onClick={goToNext} variant='outlined' color='primary' sx={{m: 5}}>next example</Button>
                <Button onClick={goToOpening} variant='outlined' color='primary' sx={{m: 5}}>exit</Button>
            </Box>
        </Box>
    );

}

export default State;
