import React, { useState } from 'react';
import Review from './Review';
import { Typography, Divider } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
  const navigate = useNavigate();

    const theme = useTheme();

    const payments = [
    'Cash on Delivery',
    'UPI',
    'Credit/Debit Card',
    'Net Banking',
    'Wallet'];

      const [paymentMode, setPaymentMode] = useState([]);

      function getStyles(payment, paymentMode, theme) {
        return {
          fontWeight:
            paymentMode.indexOf(payment) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
        };
      }

      const handleOrder = () => {
         navigate("/successful");
      }


  return (
    <>
       <Review />
      <Divider />
      <Typography variant="h4" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Payment</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={paymentMode}
          onChange={(event) => setPaymentMode(event.target.value)}
          input={<OutlinedInput label="Payment" />}
        >
          {payments.map((payment) => (
            <MenuItem
              key={payment}
              value={payment}
              style={getStyles(payment, paymentMode, theme)}
            >
              {payment}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
      <button className='address-btn' onClick={handleOrder}>Place Order</button>
      </div>
    </>
  )
}

export default PaymentForm