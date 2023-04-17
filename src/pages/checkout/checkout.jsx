import React, { useState } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { AddressForm } from './AddressForm';
import PaymentForm from './PaymentForm';
import { useNavigate } from 'react-router-dom';

const steps = ['Shipping Address', 'Payment details'];

export const Checkout = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);

    const Confirmation = () => {
        <div>Confirmation</div>
    }

    const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />

  return (
    <>
       <div className='toolbar'>
         <main className='layout'>
            <Paper className='paper'>
                <Typography variant='h4' align='center'>Checkout</Typography>
                <Stepper activeStep={activeStep} className='stepper'>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : <Form />}
                
            <button className='address-btn' onClick={() => navigate("/cart")}>Back to Cart</button>
            <button className='payment-btn' onClick={() => navigate("/payment")}>Proceed</button>
            </Paper>
         </main>
       </div>
    </>
  )
}
