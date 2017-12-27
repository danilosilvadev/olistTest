import React from 'react';
import ReactDOM from 'react-dom';
import MyForm from './components/my_form';
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components';
import style from './style.css';

const Content = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5%;
`

ReactDOM.render(<BrowserRouter><Content><MyForm /></Content></BrowserRouter>, document.getElementById('root'));