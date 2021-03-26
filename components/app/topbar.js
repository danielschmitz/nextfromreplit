import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function TopBar() {
   return <div>
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

export default TopBar;