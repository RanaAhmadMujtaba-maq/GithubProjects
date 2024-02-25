import { ClassNames } from '@emotion/react';
import React from 'react';
import { TextField, Button } from '@mui/material';
import userService from '../../services/UserService';
import { toast } from 'react-toastify';

const Login = (props) => {
    const [email, setEmail]=React.useState("")
    const [password, setPassword]=React.useState("")
    return ( 
    <div className={ClassNames.container} 
    style={{display: "flex", justifyContent:"center", alignItem:"center", /*height:"300px"*/}}>
        <div  /*className={ClassNames.child} style={{child:{width:"500px"}}}*/>
        <br /><br /><br />
        <h1>Online Shopping Mart</h1>
        <h2 style={{margin:"150px", marginBottom:"20px", marginTop:"0px"}}>Login</h2>

        <TextField label="email" variant="standard" fullWidth value={email} 
        onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
        
        <TextField label="password" type="password" fullWidth variant="standard" value={password} 
        onChange={(e)=>{setPassword(e.target.value)}}/> <br /> <br />
        
        <Button variant="contained" color="primary" 
        onClick={(e)=>{userService.login(email, password)
            .then((data)=>{console.log(data); window.location.href="/"})
            .catch((err)=>{console.log(err);
                toast.error(err.response.data, {
                position: toast.POSITION.TOP_LEFT
              })})
        }} >Login</Button>
        </div>
    </div> );
}
 
export default Login;