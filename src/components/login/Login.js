import React from "react";
import { Paper, Grid, Box, TextField, OutlinedInput,InputLabel ,FormControl, InputAdornment,IconButton} from "@mui/material";
import {Visibility, VisibilityOff } from '@mui/icons-material';
import { textAlign } from "@mui/system";
import logo from '../../assets/mermaid.jpg'; 
import "./Login.css"

const Login = () => {
    const paperStyle={padding:20, height: "70vh", width: 280, margin:"20px auto" }
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
return (
    <>
    <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
<h2>Login Account</h2>
</Grid>
  <img src={logo} className="photo" alt="Logo"/>
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Username" variant="outlined" />

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

    </Box>
    
        </Paper>
    </Grid>
    </>
);
}; 

export default Login