// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields(data) {
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': {
        width: '98%',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'gray', // Gray border color
          color:'gray',
        //   color:'white'
        },
        '&:hover fieldset': {
          borderColor: 'gray', // Gray border color on hover
        },
        '& .MuiInputBase-input': {
            color: 'gray', // Gray text color
          },
        '&.Mui-focused fieldset': {
          borderColor: 'yellow', // Gray border color when focused

        },
      },
      '& .MuiInputBase-input': {
        color: 'gray', // Gray text color
      },
      '& .MuiInputLabel-root':{
color:'gray',      },
      '& .MuiInputLabel-root.Mui-focused': {
        color: 'yellow', // Yellow label color when focused
        fontWeight:'500',
        background:'transparent',
    
      },
    }}
      noValidate
      autoComplete="off"
    >
      <div>
 
        <TextField
          id="outlined-password-input"
          label={data.label}
          type="password"
          autoComplete="current-password"
        
        />
       
      </div>
     
    </Box>
  );
}