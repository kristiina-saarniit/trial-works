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
            price: '10€',
            img: img1,
            description: 'Bart'
        },
        {
            label: 'Tshirt',
            price: '25€',
            img: img2,
            description: 'Lisa'
        },
        {
            label: 'Tshirt',
            price: '30€',
            img: img3,
            description: 'Homer and Marge'
        },
        {
            label: 'Tshirt',
            price: '35€',
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
    //variable'ite - const ja let - sees hoiame asju ja infot, mida meil on vaja hiljem kasutada.
    //selleks, et variable'it saaks updeitida, selleks kasutame const ja useState funktsiooni.
    const [shoppingCart, setShoppingCart] = useState([])
    const [total, setTotal] = useState(0)
    const [vat, setVat] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)


    function addToCart(item) {
        // console.log(item)
        //    item should now move to the shopping cart
        let shoppingCartMemo=[...shoppingCart, item]
        setShoppingCart(shoppingCartMemo)
        // array siin on selleks, et saaksime meelde jätta kõik tooted,
        // millele on klikatud ja lisada nendele järgmise, millele klikatakse.
        //... on spread-operator, mis spreadib kõik tooted uude shoppingCard array'sse
        //arvutuse teeme siin funktsioonis, sest siin asuvad shopping cardis olevad tooted
        let innerTotal=0
        for (let position of shoppingCartMemo) {
            innerTotal += parseFloat(position.price)
        //    parseFloat on selleks, et teha misiganes asjast numbrid
        }
        // console.log(innerTotal)
        setTotal(innerTotal)
        let vat = innerTotal * 0.2
        setVat(vat)

        let total = innerTotal + vat
        setGrandTotal(total)


        //todo:
        // define local variable "total",
        // then loop through "items" in shopping card - for of on kõige mugavam siin luupimiseks
        // and add total to variable
        // adding price of the item to the total
        // add total to useState total
        // output the total in the shopping cart - siin on vaja ehitada loop
        // mõelda läbi, mis juhtub, kui ma mingi toote lisan ostukorvi.

    }
    // console.log(shoppingCart)

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
                        {shoppingCart.map((itemInShoppingCart, index) => {
                            //array'd saab alati loopida
                            return (
                                <div key={index}>
                                    {itemInShoppingCart.description} {itemInShoppingCart.price}


                                </div>
                            )
                        })}
                    </Box>
                    <hr/>
                    <Box sx={{border: 1, p: 1, bgcolor: 'background.paper'}}>
                        <Typography>Total: {total} €</Typography>
                    </Box>
                    <hr/>
                    <Box sx={{border: 1, p: 1, bgcolor: 'background.paper'}}>
                        {/*<Typography>VAT 20%: {total * 0.2} €</Typography>*/}
                        <Typography>VAT 20%: {vat} €</Typography>
                    </Box>
                    <hr/>
                    <Box sx={{border: 1, p: 1, bgcolor: 'background.paper'}}>
                        {/*<Typography>Grand Total: {total * 1.2} €</Typography>*/}
                        <Typography>Grand Total: {grandTotal} €</Typography>
                    </Box>
                </Popper>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
                {/*items on defineeritud loopis. Kõik itemid loopitakse läbi ja
                igale tootele, mis on listis, toome oma komponendi ehk kuvatakse tootekaart*/}
                {items.map((item, index) => {
                    //map on array funktsioon
                    // console.log(item)
                    return (
                        <div onClick={() => addToCart(item)} key={index}>
                            {/*kogu item'i saadame cart-i seetõttu, et cartis me vajame kasutamiseks mitut item-i omadust */}
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
