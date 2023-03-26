import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import img1 from '../images/Bart.png'
import img2 from '../images/Lisa.png'
import img3 from '../images/Homer&Marge.png'
import img4 from '../images/Maggie.png'
import ProductCard from "../components/ProductCard";
import Popper from '@mui/material/Popper';


function Shopping() {

    let navigate = useNavigate()

    function goToOpening() {
        navigate('/')
    }

    const items = [
        {
            label: 'Tshirt',
            price: 10,
            img: img1,
            description: 'Bart'
        },
        {
            label: 'Tshirt',
            price: 25,
            img: img2,
            description: 'Lisa'
        },
        {
            label: 'Tshirt',
            price: 30,
            img: img3,
            description: 'Homer and Marge'
        },
        {
            label: 'Tshirt',
            price: 35,
            img: img4,
            description: 'Maggie'
        },
    ]

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const [shoppingCart, setShoppingCart] = useState([])
    const [lineTotal, setLineTotal] = useState(0)

    function addToCart(item) {
        // console.log(item)
        //    info should now move to the shopping cart

        setShoppingCart([...shoppingCart, item])

        //todo:
        // define local variable "total",
        // then loop through "items" in shopping card
        // and add total to variable
        // adding price of the item to the total
        // add total to useState lineTotal
        // output the lineTotal in the shopping cart - siin on vaja ehitada loop
        // mõelda läbi, mis juhtub, kui ma mingi toote lisan ostukorvi.
        // Oliver saadab mulle Vali-IT lindistuse, kus nad teevad täpselt seda sama asja

    }

    console.log(shoppingCart)

    return (

        <Box sx={{width: '95%', p: 2, backgroundColor: 'white'}}>
            <Typography variant="h4" align='center' sx={{m: 10}}>
                Welcome to my E-shop!
            </Typography>

            <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
                <IconButton onClick={handleClick} color="primary" aria-label="add to shopping cart">
                    <ShoppingCartIcon color="primary" fontSize="large"/>
                </IconButton>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Box sx={{border: 1, p: 1, bgcolor: 'background.paper'}}>
                        {shoppingCart.map((el, index) => {
                            return (
                                <div key={index}>
                                    {el.description}
                                </div>
                            )
                        })}
                    </Box>
                    <hr/>
                    <Box sx={{border: 1, p: 1, bgcolor: 'background.paper'}}>
                        <Typography>Total:{lineTotal}</Typography>
                    </Box>
                    <hr/>
                    <Box sx={{border: 1, p: 1, bgcolor: 'background.paper'}}>
                        <Typography>VAT:{}</Typography>
                    </Box>
                    <hr/>
                    <Box sx={{border: 1, p: 1, bgcolor: 'background.paper'}}>
                        <Typography>Grand Total:{}</Typography>
                    </Box>
                </Popper>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
                {/*igale tootele, mis on listis, toome oma komponendi*/}
                {items.map((item, index) => {
                    // console.log(item)
                    return (
                        <div onClick={() => addToCart(item)} key={index}>
                            <ProductCard item={item}/>
                        </div>)
                })}

            </Box>
            <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
                <Button onClick={goToOpening} variant='outlined' color='primary' sx={{m: 10}}>exit</Button>
                {/*<BackButtonComponent/>*/}
            </Box>
        </Box>
    );
}

export default Shopping;
