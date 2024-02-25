import { Grid, Rating, Typography } from "@mui/material";
import React from "react";

const ContactUs = () => {
    const [value, setValue]=React.useState()
    return ( 
        <Grid sm={12} xs={12} ld={6}>
            <h1 style={{marginLeft:"550px", marginBottom:"20px", marginTop:"40px"}}>
                Contact
            </h1>
            <h2 style={{marginLeft:"460px", marginBottom:"20px", marginTop:"0px"}}>
                We love to hear from you
                <br /><br />
                <p style={{marginLeft:"60px", marginBottom:"20px", marginTop:"0px"}}>
                <Typography component="legend">Give us some rating</Typography>
                <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                />
                </p>
            </h2>
            <h3 style={{marginLeft:"400px", marginBottom:"20px", marginTop:"0px"}}>
                Email us: ahmadmujtaba.maq@gmail.com <br />
                Phone: 03204176894
            </h3>
            <br /><br /><br /><br /><br /><br /><br />
        </Grid>
     );
}
 
export default ContactUs
