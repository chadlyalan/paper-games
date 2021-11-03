import { withStyles } from '@material-ui/core';
import React from 'react';
import { Button } from '@material-ui/core';


//this styled button is currently unused due to the use of StylesProvider 
//allowing us to prioritize injecting css before it's own style as
//done in index.js

const Style = withStyles({
    root: {
      background: 'rgb(255, 255, 255)',
      float: 'left',
      border: '1px solid #999',
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 34,
      height: 34,
      marginRight: -1,
      marginTop: -1,
      padding: 0,
      textAlign: 'center',
      width: 34,
      //borderRadius: 0
    
    },
  })(Button);

  export default function StyledButton() {
    return <Style></Style>;
  }