import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function HomePage() {
  return <div>
    <Button 
      variant="contained" 
      color="primary"
      onClick={() => { alert('click click') }}
      >
      Hello World
    </Button>
  </div>
}

export default HomePage