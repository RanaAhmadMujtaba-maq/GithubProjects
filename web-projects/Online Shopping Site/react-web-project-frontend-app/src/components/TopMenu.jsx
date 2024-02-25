/*import {Link} from "react-router-dom";*/
import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, Typography, AppBar, Button} from "@mui/material";
import userService from "../services/UserService"

/*import { makeStyles} from "@mui/material/styles";

const useStyles = makeStyles ((theme) => ({
     link:{
         color:"white"
     },

}))*/

const TopMenu = () => {
    /*const classes = useStyles()*/
    return ( 
        <AppBar position="static" style={{background:"black"}}>
            <Toolbar variant="dense">
                <Typography variant="h6" style={{padding:"10px", fontSize: "35px"}}>
                Online Shopping Mart
                </Typography>
                <Typography variant="h6" style={{padding:"10px"}}>
                <Link to="/" /*className={classes.link}*/ style={{color:"white"}}>Home</Link>
                </Typography>
                <Typography variant="h6" style={{padding:"10px"}}>
                <Link to="/Products" /*className={classes.link}*/ style={{color:"white"}}>Products</Link>
                </Typography>
                <Typography variant="h6" style={{padding:"10px"}}>
                <Link to="/Products/new" /*className={classes.link}*/ style={{color:"white"}}>New Products</Link>
                </Typography>
                <Typography variant="h6" style={{padding:"10px"}}>
                <Link to="/ContactUs" /*className={classes.link}*/ style={{color:"white"}}>ContactUs</Link>
                </Typography>
                
                {
                !userService.isLoggedIn()?
                (<>
                <Typography variant="h6" style={{padding:"10px"}}>
                <Link to="/login" /*className={classes.link}*/ style={{color:"white"}}>Login</Link>
                </Typography>
                <Typography variant="h6" style={{padding:"10px"}}>
                <Link to="/register" /*className={classes.link}*/ style={{color:"white"}}>Register</Link>
                </Typography>
                </>)
                :(<Button variant="contained" color="primary" 
                onClick={(e)=>{userService.logout(); window.location.reload()}}
                >LogOut {userService.getLoggedInUser().name+" [ "+userService.getLoggedInUser().role+" ]"}</Button>)}
                
            </Toolbar>
        </AppBar>
/*
    <div>
        <ul>
            <li style={{display: "inline", padding: "5px"}}>
                <Link to="/">Home</Link>
            </li>
            <li style={{display: "inline", padding: "5px"}}>
                <Link to="/Products">Products</Link>
            </li>
            <li style={{display: "inline", padding: "5px"}}>
                <Link to="/ContactUs">Contact Us</Link>
            </li>   
            <li style={{display: "inline", padding: "5px"}}>
                <Link to="/Login">Login</Link>
            </li>    
            <li style={{display: "inline", padding: "5px"}}>
                <Button variant="contained" color="secondary">sign up</Button>      
            </li>  
        </ul>
    </div> */
    
    );
    
}
 
export default TopMenu;