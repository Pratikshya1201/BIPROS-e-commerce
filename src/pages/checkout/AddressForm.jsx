import React from 'react';
import { Typography, Grid, TextField, Checkbox } from '@material-ui/core';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./address.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';

export const AddressForm = () => {

  // const location = useLocation();
  // console.log(Number(new URLSearchParams(location.search).get('editAddress')));
  // const editAddress = Number(new URLSearchParams(location.search).get('editAddress'));

  const details = JSON.parse(localStorage.getItem("item"));
  // const show = JSON.parse(localStorage.getItem("display"));
  

  // const selectedEditAddress = editAddress === 1 ? details : null;

  // const selectedEditAddress = editAddress === 1 ? details : show;
  // console.log('This is selected addresss', selectedEditAddress);

  const addressArr = [
    {
      firstname: "pratikshya",
      lastname: details ? details.lastname :  "",
      email: details ? details.email :  "",
      phone: details ? details.phone :  "",
      addressline1: details ? details.addressline1 :  "",
      postalcode: details ? details.postalcode :  "",
      city: details ? details.city :  "",
      country: details ? details.country :  "",
      addresstype: ""
    },
    {
      firstname: "prats",
      lastname: details ? details.lastname :  "",
      email: details ? details.email :  "",
      phone: details ? details.phone :  "",
      addressline1: details ? details.addressline1 :  "",
      postalcode: details ? details.postalcode :  "",
      city: details ? details.city :  "",
      country: details ? details.country :  "",
      addresstype: ""
    }
  ];
  
  const [address, setAddress] = useState(addressArr);
  console.log(address);
  localStorage.setItem("item", JSON.stringify(address));

  const updateAddress = (e) => {
    setAddress({...address.map((e) => [e.target.value])})
  }

    
    const navigate = useNavigate();
    const label = { inputProps: { 'aria-label': 'Check' } };
    const handleSave = (e) => {
         e.preventDefault();
        //  const setItemKey = editAddress === 1 ? address[0] : address[1];
        //  const setItemKey = editAddress === 1 ? "address" : "display"
        //  localStorage.setItem(setItemKey, JSON.stringify(address));
         navigate("/profile");
    }

  return (
    <>
      <Grid container spacing={2} columns={16}>
      <Grid item xs={11}>
        <TextField className='input' name='firstname' value={address.firstname} onChange={(e) => setAddress({... address, [e.target.name]: e.target.value})} fullWidth label="First Name" required />
        </Grid>
        <Grid item xs={11}>
        <TextField className='input' name='lastname' value={address.lastname} onChange={(e) => setAddress({... address, [e.target.name]: e.target.value})} fullWidth label="Last Name" required />
        </Grid>
        <Grid item xs={11}>
        <TextField className='input' name='email' value={address.email} onChange={(e) => setAddress({... address, [e.target.name]: e.target.value})} fullWidth label="Email" required />
        </Grid>
        <Grid item xs={11}>
        <TextField className='input' name='phone' value={address.phone} onChange={(e) => setAddress({... address, [e.target.name]: e.target.value})} fullWidth label="Phone Number" required />
        </Grid>
        <Grid item xs={11}>
        <TextField className='input' name='addressline1' value={address.addressline1} onChange={(e) => setAddress({... address, [e.target.name]: e.target.value})} fullWidth label="Address Line 1" required />
        </Grid>
        <Grid item xs={11}>
        <TextField className='input' name='postalcode' value={address.postalcode} onChange={(e) => setAddress({... address, [e.target.name]: e.target.value})} fullWidth label="Postal Code" required />
        </Grid>
        <Grid item xs={11}>
        <TextField className='input' name='city' value={address.city} onChange={(e) => setAddress({... address, [e.target.name]: e.target.value})} fullWidth label="City" required />
        </Grid>
        <Grid item xs={11}>
        <TextField className='input' name='country' value={address.country} onChange={(e) => setAddress({... address, [e.target.name]: e.target.value})} fullWidth label="Country" required />
        </Grid>
      <Grid item xs={11}>
        <FormControl component="fieldset">
      <FormLabel component="legend" required>Address Type</FormLabel>
      <FormGroup aria-label="position" row>
      <FormControlLabel
          control={<Checkbox name='addresstype' value="Home" onChange={(e) => setAddress({... address, [e.target.name]: e.target.value})} />}
          label="Home"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox name='addresstype' value="Work" onChange={(e) => setAddress({... address, [e.target.name]: e.target.value})} />}
          label="Work"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
        </Grid>
      </Grid>
      <button className='btn-save' onClick={handleSave}>Save</button>
    </>
  )
}
