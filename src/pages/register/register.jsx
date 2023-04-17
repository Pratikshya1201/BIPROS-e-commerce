import React, { useState } from 'react'
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
`;

const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
`;

const Title = styled.h1`
   font-size: 24px;
`;

const Input = styled.input`
   flex: 1;
   min-width: 40%;
   margin: 20px 10px 0px 0px;
   padding: 20px;
`;

const Button = styled.button`
    width: 100%;
    border: none;
    padding: 10px 10px; 
    margin-top: 20px;
    background-color: teal;
    cursor: pointer;
`;


export const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        username: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));  //we cannot store input in object format so convert to string
        navigate("/login");
    };

  return (
    <Container>
        <Wrapper>
            <Title>Register</Title>
            <Form>
                <Input name='name' type='text' value={input.name} onChange={(e) => setInput({... input, [e.target.name]: e.target.value})} placeholder="name" />
                <Input name='email' type='email' value={input.email} onChange={(e) => setInput({... input, [e.target.name]: e.target.value})} placeholder="email" />
                <Input name='phone' type='number'value={input.number} onChange={(e) => setInput({... input, [e.target.name]: e.target.value})} placeholder="phone" />
                <Input name='username' type='text' value={input.username} onChange={(e) => setInput({... input, [e.target.name]: e.target.value})} placeholder="username" />
                <Input name='password' type='password' value={input.password} onChange={(e) => setInput({... input, [e.target.name]: e.target.value})} placeholder="password" />
            </Form>
            <Button onClick={handleSubmit} type='submit'>CREATE</Button>
            <h4>Already registered? <Link to="/login"> Login </Link></h4>
        </Wrapper>
    </Container>
  )
}
