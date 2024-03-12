import React, { useState } from 'react';
import styled from 'styled-components';

const Button=styled.button`
    background: #d16285fa;
    border-radius:5px;
    border:2px solid #ddd;
    color:#a70638fa;
    margin: 0.5em;
    padding:10px 30px;
    font-size:30px;
`
const Container=styled.div`
    width:500px;
    height:200px;
    margin:50px auto;
    padding:30px 60px;
    border: 5px solid #794c5afa;

`

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase= ()=>{
        setCount(count+1)
    }
    const decrease= ()=>{
        setCount(count-1)
    }
    return (
        <Container>
            <h1>{count}</h1>
            <Button onClick={decrease}>-</Button>
            <Button onClick={increase}>+</Button>
        </Container>
    );
};

export default Counter;