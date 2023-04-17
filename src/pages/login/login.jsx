import React, {useState} from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

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
   flex-direction: column;
`;

const Title = styled.h1`
   font-size: 24px;
`;

const Input = styled.input`
   flex: 1;
   min-width: 90%;
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


export const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
});
      
    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user"));  //to convert from string to object - parse
        if(input.username === loggedUser.username && input.password === loggedUser.password) {
            localStorage.setItem("loggedin", true);
            navigate("/");
        } else {
          alert("Wrong username or password");
        }
    };

  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
               <Input name='username' type='text' value={input.username} onChange={(e) => setInput({... input, [e.target.name]: e.target.value})} placeholder="username" />
                <Input name='password' type='password' value={input.password} onChange={(e) => setInput({... input, [e.target.name]: e.target.value})} placeholder="password" />
            </Form>
            <Button onClick={handleLogin}>SIGN IN</Button>
            <h4>Haven't registered yet? <Link to="/register"> Register </Link></h4>
        </Wrapper>
    </Container>
  )
}
