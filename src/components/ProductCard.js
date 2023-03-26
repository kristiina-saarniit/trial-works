import React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box"
import {CardActionArea} from "@mui/material";

function ProductCard(props) {

    return (
        <Box>
            <Card sx={{maxWidth: 345, m: 5}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={props.item.img}
                        alt="product image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div">
                            {props.item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.item.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.item.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>

    )

}

export default ProductCard