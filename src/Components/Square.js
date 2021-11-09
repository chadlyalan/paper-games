import { Button } from '@material-ui/core';
import React from 'react';



function Square(props) {
  
  return (
    
    <Button 
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </Button>
  );
}
  

  export default Square;