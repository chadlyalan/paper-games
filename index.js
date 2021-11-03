import { Button } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Layout/Header.js';
import Game from './Components/Game.js';
import { StylesProvider } from '@material-ui/styles';
import './Layout/index.css';
//import Footer from './Layout/Footer.js';


class App extends React.Component {
    render() {
        return (
            <StylesProvider injectFirst>
              
                    <Header />
                    <Button>Tic Tac Toe</Button>
                    <Game />
               
            </StylesProvider>
           
        );
      
        
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)