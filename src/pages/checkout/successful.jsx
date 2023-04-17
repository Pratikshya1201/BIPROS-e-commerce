import React from 'react';
import { CheckCircle } from 'phosphor-react';
import { Link } from 'react-router-dom';
import './successful.css';

export const Successful = () => {
  return (
    <>
    <div className='successful'>
        <CheckCircle size={80} />
    </div>
    <h2>Order Placed</h2>
    
    </>
  )
}
