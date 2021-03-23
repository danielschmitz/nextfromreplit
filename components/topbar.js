import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function TopBar() {
   return <div>
    <Button
      variant="contained"
      color="primary"
    >
      Home  
    </Button>
    &nbsp;
    <Button
      variant="contained"
      color="primary"
    >
      Categories     
    </Button>
    &nbsp;
    <Button
      variant="contained"
      color="primary"
    >
      Products     
    </Button>
  </div>
}

export default TopBar;