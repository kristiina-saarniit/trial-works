import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function RowAndColumnSpacing(props) {
    return (
        <Box sx={{ width: '100%', marginTop: '10px' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Typography>Order No</Typography>
                    <TextField
                        sx={{width: '100%', backgroundColor: 'lightgrey'}}
                        // label="Order No"
                        variant="outlined"
                        defaultValue={props.row.orderNo}
                     />
                </Grid>
                <Grid item xs={6}>
                    <Typography>Date</Typography>
                    <TextField
                        sx={{width: '100%', backgroundColor: 'lightgrey'}}
                        // label="Date"
                        variant="outlined"
                        defaultValue={props.row.date}
                    />

                </Grid>
                <Grid item xs={6}>
                    <Typography>Customer</Typography>
                    <TextField
                        sx={{width: '100%', backgroundColor: 'lightgrey'}}
                        // label="Customer"
                        variant="outlined"
                        defaultValue={props.row.customer}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography>Tracking No</Typography>
                    <TextField
                        sx={{width: '100%', backgroundColor: 'lightgrey'}}
                        // label="Tracking No"
                        variant="outlined"
                        defaultValue={props.row.trackingNo}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography>Consignee</Typography>
                    <TextField
                        sx={{width: '100%', backgroundColor: 'lightgrey'}}
                        // label="Consignee"
                        variant="outlined"
                        defaultValue={props.row.consignee}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography>Status</Typography>
                    <TextField
                        sx={{width: '100%', backgroundColor: 'lightgrey'}}
                        // label="Status"
                        variant="outlined"
                        id="filled-textarea"
                        defaultValue={props.row.status}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}