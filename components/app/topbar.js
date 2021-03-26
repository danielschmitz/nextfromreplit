import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export default function TopBar() {
   return <div id="topbar">
    <Button
      variant="contained"
      color="primary"
      href="/"
    >
      Home  
    </Button>
    &nbsp;
    <Button
      variant="contained"
      color="primary"
       href="/categories"
    >
      Categories     
    </Button>
    &nbsp;
    <Button
      variant="contained"
      color="primary"
       href="/products"
    >
      Products     
    </Button>
  </div>
}

