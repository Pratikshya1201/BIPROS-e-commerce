import React from 'react';
import { Grid, Box } from '@mui/material';
import './budgetbazaar.css';

export const Budgetbazaar = () => {
  return (
    <Box ml="1%" mr="1%" mt="30px">
        <h3>Budget Bazaar</h3>
        <Grid
           container
           direction="row"
        >
            <Box>
                <img src="https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_01.jpg" alt="Banner" />
            </Box>
            <Box>
                <img src="https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_02.jpg" alt="Banner" />
            </Box>
            <Box>
                <img src="https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_03.jpg" alt="Banner" />
            </Box>
            <Box>
                <img src="https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_04.jpg" alt="Banner" />
            </Box>
        </Grid>
        </Box>
  )
}