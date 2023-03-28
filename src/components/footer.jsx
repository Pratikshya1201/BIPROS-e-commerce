import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import {BsShieldCheck} from "react-icons/bs"
import {TbCurrencyRupee} from "react-icons/tb"
import {AiOutlineShoppingCart} from "react-icons/ai"
import './footer.css';

export const Footer = () => {
    return (
        <div className="footer">
            <h3>Band of Trust</h3>
            <Grid display="flex" justifyContent="space-around" alignItems="center"> 
            <Box pt="7px" mt="20px" w="200px" height="120px">
                <BsShieldCheck  color="#4fb5c4" size="50px" />
                <Typography  mt={2} color="#777675" fontSize="20px">Great Selection</Typography>
            </Box>
            <Box pt="7px" mt="20px" w="200px" height="120px">
                <TbCurrencyRupee  color="#4fb5c4" size="50px" />
                <Typography  mt={2} color="#777675" fontSize="20px">Low Price</Typography>
            </Box>
            <Box pt="7px" mt="20px" w="200px" height="120px">
                <AiOutlineShoppingCart  color="#4fb5c4" size="50px" />
                <Typography mt={2} color="#777675" fontSize="20px">Speedy Delivery</Typography>
            </Box>
             </Grid>
        </div>
    )
}