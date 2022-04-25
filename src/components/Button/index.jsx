import Button from '@mui/material/Button';
import React from 'react'

function ButtonSeven({label, onClick}) {
  return (
    <Button variant="contained" onClick={() => onClick()}>
        {label}
    </Button>
  )
}

export default ButtonSeven;
