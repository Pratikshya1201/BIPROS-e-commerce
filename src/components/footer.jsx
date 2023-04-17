import React from 'react';
import { Grid, Box, Typography, Container, Stack, Link } from '@mui/material';
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
                <BsShieldCheck color="#4fb5c4" size="50px" />
                <Typography mt={2} color="#777675" fontSize="20px">Great Selection</Typography>
            </Box>
            <Box pt="7px" mt="20px" w="200px" height="120px">
                <TbCurrencyRupee color="#4fb5c4" size="50px" />
                <Typography mt={2} color="#777675" fontSize="20px">Low Price</Typography>
            </Box>
            <Box pt="7px" mt="20px" w="200px" height="120px">
                <AiOutlineShoppingCart color="#4fb5c4" size="50px" />
                <Typography mt={2} color="#777675" fontSize="20px">Speedy Delivery</Typography>
            </Box>
             </Grid>
             <Box className="box">
                 <Container as={Stack} maxWidth={'6xl'}>
                    <Grid spacing={8}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between">
                        <Stack alignItems={'flex-start'} spacing={1.5}>
                              <h4>Shopper Central</h4>
                              <Link color="#777675" href={'#'} underline="hover">Easy Returns & Replacement</Link>
                              <Link color="#777675" href={'#'} underline="hover">Sign In/Register</Link>
                              <Link color="#777675" href={'#'} underline="hover">Our Policies</Link>
                              <Link color="#777675" href={'#'} underline="hover">CluesBucks</Link>
                              <Link color="#777675" href={'#'} underline="hover">Payment Options</Link>
                              <Link color="#777675" href={'#'} underline="hover">ShopClues Bazaa Surety</Link>
                              <Link color="#777675" href={'#'} underline="hover">FAQs (Help)</Link>
                              <Link color="#777675" href={'#'} underline="hover">Service Centers</Link>
                              <Link color="#777675" href={'#'} underline="hover">UserAgreement</Link>
                        </Stack>
                        <Stack alignItems={'flex-start'} spacing={1.5} marginBottom={5}>
                              <h4>Merchant Central</h4>
                             <Link color="#777675" href={'#'} underline="hover">Merchant Panel</Link>
                             <Link color="#777675" href={'#'} underline="hover">How To Sell</Link>
                             <Link color="#777675" href={'#'} underline="hover">Commission Structure</Link>
                             <Link color="#777675" href={'#'} underline="hover">Fullfill Policy</Link>
                             <Link color="#777675" href={'#'} underline="hover">Policies & Rules</Link>
                             <Link color="#777675" href={'#'} underline="hover">User Agreement</Link>
                             <Link color="#777675" href={'#'} underline="hover">Testimonials</Link>
                             <Link color="#777675" href={'#'} underline="hover">Seller Summit</Link>
                             <Link color="#777675" href={'#'} underline="hover">Merchant Blog</Link>
                             <Link color="#777675" href={'#'} underline="hover">Developer Resources</Link>
                        </Stack>
                        <Stack align={'flex-start'} spacing={1.5}>
                             <h4 className='about'>About Us</h4>
                             <Link color="#777675" href={'#'} underline="hover">History</Link>
                             <Link color="#777675" href={'#'} underline="hover">Band of Trust</Link>
                             <Link color="#777675" href={'#'} underline="hover">In the News</Link>
                             <Link color="#777675" href={'#'} underline="hover">Awards</Link>
                             <Link color="#777675" href={'#'} underline="hover">Careers</Link>
                             <Link color="#777675" href={'#'} underline="hover">Blog</Link>
                        </Stack>
                        <Stack align={'flex-start'} spacing={1.5}>
                          <h4>Contact Us</h4>
                          <Link color="#777675" href={'#'} underline="hover">Merchant Support</Link>
                          <Link color="#777675" href={'#'} underline="hover">Bulk Orders</Link>
                          <Link color="#777675" href={'#'} underline="hover">Press</Link>
                         </Stack>
                      </Stack>
                    </Grid>
                 </Container>
             </Box>
        </div>
    )
}