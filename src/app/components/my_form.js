import React, { Component } from 'react'
import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    justify-content:center;
    align-items:center;
    border: 1px solid #d9d9d9;
    width: 65vh;
    padding-bottom: 8vh;
    background-color: white;
`

const Div = styled.div`
    font-family: Verdana;
    font-size: 2.2vh;
    color: grey;
    border: grey;
`

const B = styled.b`
    color: #4d4d4d;
`

const Header = styled.header`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    margin-bottom: 2vh;
    margin-top: 2vh;  
    `

const H1 = styled.h1`
    color: #0c29d0
`

const Label = styled.label`
    display: flex;
    flex-direction: column;    
`

const Ul = styled.ul`
    list-style-position: inside;
    padding-left:0;
`

const Span = styled.span`
    margin-bottom: 2%;
    margin-top: 2%;
    color: grey;
`

const Boxes = styled.div`
    margin-top = 10000000px;
`

const Button = styled.a`
    display: flex;
    justify-content:center;
    height: 155%;    
    width: 100%;
    background-color: #17d499;
    color: white;
    text-decoration: none;
    padding-top: 3%;
    padding-bottom: 3%;
`

const Input = styled.input`
    height: 3.5vh;
    border: 1px solid grey;
`

const Box = styled.div`
    display: block;
    float: left;
    border-radius: 3px;
    width: 31%;
    margin: 1%;
    margni-top: 3%;
    height: 1vh;
`

const regExpLetters = /[A-Z]/;
const regExpNumbers = /[0-9]/;

let reqTests = 0;

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        item: '',
        color1: '#e6e6e6',
        color2: '#e6e6e6',
        color3: '#e6e6e6',
        colorText: 'grey',
        color4: '#bfbfbf',
        color5: '#bfbfbf',
        color6: '#bfbfbf',
        borderPass: '1px solid grey',
        Dot1Color: 'grey',
        Dot2Color: 'grey', 
        Dot3Color: 'grey', 
    };

    handleChange(event) {
        this.setState({ item: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let item = this.state.item;
        console.log(item.length);
        if (item.length > 5) {
            reqTests+=15;
        }
        if (regExpLetters.test(item)) {
            reqTests+=20;
        }
        if (regExpNumbers.test(item)) {
            reqTests+=30;
        }

        if(reqTests < 15){
            this.setState({
                borderPass: '1px solid red',
                Dot1Color: 'red',
                Dot2Color: 'red',
                Dot3Color: 'red'
            });
        }
        if (reqTests == 15) {
            this.setState({
                color1: 'red',
                Dot1Color: 'green',
                Dot2Color: 'red',
                Dot3Color: 'red'
            });
        } else if (reqTests == 35) {
            this.setState({
                color1: 'orange',
                color2: 'orange',
                Dot1Color: 'green',
                Dot2Color: 'green',
                Dot3Color: 'red',
                borderPass: '1px solid red'
            });
        } else if(reqTests == 45){
            this.setState({
                color1: 'orange',
                color2: 'orange',
                Dot1Color: 'green',
                Dot2Color: 'red',
                Dot3Color: 'green',
                borderPass: '1px solid red'
            });
        } else if(reqTests == 20){
            this.setState({
                color1: 'red',
                Dot1Color: 'red',
                Dot2Color: 'green',
                Dot3Color: 'red',
                borderPass: '1px solid red'
            });
        } else if(reqTests == 30){
            this.setState({
                color1: 'red',
                Dot1Color: 'red',
                Dot2Color: 'red',
                Dot3Color: 'green',
                borderPass: '1px solid red'
            });
        } 
        else if (reqTests == 65) {
            this.setState({
                color1: 'green',
                color2: 'green',
                color3: 'green',
                borderPass: '1px solid green',
                Dot1Color: 'green',
                Dot2Color: 'green',
                Dot3Color: 'green'
            });
        }
        reqTests = 0;
    }

    

    render() {
       
       const inputPass = {
            border: this.state.borderPass,
            height: '3.5vh'
       }
        
        const Box1 = Box.extend`
            background-color: ${this.state.color1};    
    `

        const Box2 = Box.extend`
            background-color: ${this.state.color2};        
    `

        const Box3 = Box.extend`
            background-color: ${this.state.color3};    
    `

        //change this inline per styled components
        const Req = styled.li`
            color: ${this.state.colorText};
            list-style-type: none;
    `
       const Dot1 = styled.span`
            color: ${this.state.Dot1Color};
       `

       const Dot2 = styled.span`
            color: ${this.state.Dot2Color};
       `

       const Dot3 = styled.span`
            color: ${this.state.Dot3Color};
       `

        return <Section>
            <Div>
                <Header>
                    <H1>Olist</H1>
                    <B>Crie sua conta</B>
                </Header>
                <form>
                    <Label>
                        <Span>Nome completo</Span>
                        <Input type="text" />
                    </Label>
                    <Label>
                        <Span>E-mail</Span>
                        <Input type="text" />
                    </Label>
                    <Label>
                        <Span>Senha</Span>
                        <input style={inputPass} type="password" onChange={this.handleChange} />
                    </Label>
                    <Boxes>
                        <Box1 /><Box2 /><Box3 />
                    </Boxes>
                    <Ul>
                        <Req><Dot1>&bull;</Dot1> Pelo menos 6 caracteres.</Req>
                        <Req><Dot2>&bull;</Dot2> Pelo menos 1 letra maiúscula.</Req>
                        <Req><Dot3>&bull;</Dot3> Pelo menos 1 número.</Req>
                    </Ul>
                    <Label>
                        <Span>Confirme sua senha</Span>
                        <Input type="password" />
                    </Label><br />
                    <Button href='#' onClick={this.handleSubmit}>Criar conta</Button>
                </form>
            </Div>
        </Section>
    }
}
export default MyForm