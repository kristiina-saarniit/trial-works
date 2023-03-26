import React, {useState, createContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import axios from "axios";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {DataGrid} from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ShipmentData from "./ShipmentData";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ShipmentDetailView from '../components/ShipmentDetailView'

// export const ArtistsContext = createContext(null);
//creating an empty pot

function Shipments() {

    let navigate = useNavigate()
    const [shipment, setShipment] = useState('');
    const [open1, setOpen1] = useState(false);
    const [pickedItem, setPickedItem] = useState({})

    function handleClose() {
        setOpen1(false);
    }

    function openPanel(row) {
        // alert('Click')
        // console.log(row)
        setPickedItem(row)
        setOpen1(true)
    }

    function goToOpening() {
        navigate('/')
    }

    useEffect(() => {
        let url = 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0'

        axios.get(url)

            .then((response) => {
                console.log(response.data)
                // see on ainult analüüsimiseks ja kontrollimiseks, et töötab. Alati kasutame seda arenduse käigus.

                setShipment(response.data)
            })
            .catch((error) => {
                console.log(error)

                // Code for handling the error
                setShipment('')
            })

    }, []);

    const columns = [
        // {field: 'id', headerName: 'ID', width: 50},
        {field: 'orderNo', headerName: 'ORDER NO', width: 230},
        {field: 'date', headerName: 'DELIVERY DATE', width: 130},
        {field: 'customer', headerName: 'CUSTOMER', width: 380},
        {field: 'trackingNo', headerName: 'TRACKING NO', width: 250},
        {field: 'status', headerName: 'STATUS', width: 100},
        {field: 'consignee', headerName: 'CONSIGNEE', width: 380},
        {
            field: 'action1', headerName: '', width: 60, renderCell: (params) => {
                // console.log(params)
                return (
                    <IconButton onClick={() => openPanel(params.row)} aria-label="delete" size="large">
                        <OpenInFullIcon/>
                    </IconButton>
                );
            }
        },
        {
            field: 'action2', headerName: '', width: 60, renderCell: (params) => {
                return (
                    <IconButton onClick={() => deleteFunction()} aria-label="delete" size="large">
                        <DeleteIcon/>
                    </IconButton>
                );
            }
        }
    ];
    // console.log(ShipmentData)

    const rows = [
        {
            id: 1,
            orderNo: 'zz-450581-11385595-4210084',
            date: '10/16/2019',
            customer: 'Allied World Assurance Company Holdings, AG',
            trackingNo: 'TP-322611-76705250-3801890',
            status: 'Delivered',
            consignee: 'National American University Holdings, Inc.'
        },
        {
            id: 2,
            orderNo: 'orderNo2',
            date: 'deliveryDate2',
            customer: 'customer2',
            trackingNo: 'trackingNo2',
            status: 'Status2',
            consignee: 'consignee2'
        },
        {
            id: 3,
            orderNo: 'orderNo3',
            date: 'deliveryDate3',
            customer: 'customer3',
            trackingNo: 'trackingNo3',
            status: 'Status3',
            consignee: 'consignee3'
        },
    ];

    // async function retrieveShipmentsData() {
    //     let url = 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0'
    //
    //     await axios.get(url)
    //
    //         .then((response) => {
    //             console.log(response)
    //             // see on ainult analüüsimiseks ja kontrollimiseks, et töötab. Alati kasutame seda arenduse käigus.
    //
    //             // Code for handling the response
    //             setShipment(response.data)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //
    //             // Code for handling the error
    //             setShipment('')
    //         })
    // }

    function deleteFunction() {
        alert('Are you sure?')
    }

    return (

        <Box sx={{width: '95%', p: 2, backgroundColor: 'white'}}>
            <Typography variant="h4" align='center' sx={{m: 2}}>
                Shipments
            </Typography>

            <div style={{height: '80vh', width: '100%'}}>
                <DataGrid getRowId={(row) => row.orderNo}
                    // rows={rows}
                    rows={shipment}
                    columns={columns}
                    pageSize={20}
                    rowsPerPageOptions={[20]}
                />
            </div>

            <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
                <Button onClick={goToOpening} variant='outlined' color='primary' sx={{m: 10}}>exit</Button>
            </Box>

            <Dialog
                maxWidth='lg'
                open={open1}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{marginBottom: '10px'}}>
                    <Typography>SHIPMENT DETAILS</Typography>
                </DialogTitle>
                <DialogContent>
                    {/*<DialogContentText id="alert-dialog-description">*/}
                    {/*    Let Google help apps determine location. This means sending anonymous*/}
                    {/*    location data to Google, even when no apps are running.*/}
                    {/*</DialogContentText>*/}
                    <ShipmentDetailView row={pickedItem}/>
                </DialogContent>
                {/*<DialogActions>*/}
                {/*    <Button onClick={handleClose}>Disagree</Button>*/}
                {/*    <Button onClick={handleClose} autoFocus>*/}
                {/*        Agree*/}
                {/*    </Button>*/}
                {/*</DialogActions>*/}
            </Dialog>

        </Box>

    );
}

export default Shipments;
