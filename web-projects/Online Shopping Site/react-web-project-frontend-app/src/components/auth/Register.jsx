import { ClassNames } from '@emotion/react';
import React from 'react';
import { TextField, Button } from '@mui/material';
import userService from '../../services/UserService';
import { toast } from 'react-toastify';

const Register = (props) => {
    const [email, setEmail]=React.useState("ahmadmujtaba.maq@gmail.com")
    const [password, setPassword]=React.useState("ahmad")
    const [name, setName]=React.useState("ahmad")
    return ( 
    <div className={ClassNames.container} 
    style={{display: "flex", justifyContent:"center", alignItem:"center", /*height:"300px"*/}}>
        <div  /*className={ClassNames.child} style={{child:{width:"500px"}}}*/>
        <br /><br />
        <h1>Online Shopping Mart</h1>
        <h2 style={{margin:"50px", marginBottom:"20px", marginTop:"0px"}}>Create your Account</h2>
        <TextField label="name" variant="standard" value={name}         
        onChange={(e)=>{setName(e.target.value)}}/> <br/>
        <TextField label="email" variant="standard" value={email}          
        onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
        <TextField label="password" type="password" variant="standard" value={password}          
        onChange={(e)=>{setPassword(e.target.value)}}/> <br/><br />
        <Button variant="contained" color="primary" 
        onClick={(e)=>{userService.register(name, email, password)
            .then((data)=>{console.log(data); window.location.href=("/login")})
            .catch((err)=>{console.log(err); 
                toast.error(err.response.data, {
                position: toast.POSITION.TOP_LEFT
              })})
            }} >Register</Button>
        </div>
    </div> );
}
 
export default Register;