import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function FooComp() {
  return <div>I'm a foo comp</div>
}

function HomePage() {
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

export default HomePage