import { Grid, TextField, Button } from '@mui/material';
import React from 'react';
import { toast } from 'react-toastify';
import productService from '../../services/ProductService';

const NewProduct = (props) => {
    const [name, setName] = React.useState([""])
    const [price, setPrice] = React.useState([0])
    
    return ( 
        <Grid container spacing={3}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
            <br /><br /><br />
            <h1 style={{margin:"100px", marginBottom:"20px", marginTop:"0px"}}>Online Shopping Mart</h1>
            <h2 style={{margin:"150px", marginBottom:"20px", marginTop:"0px"}}>Create New Product</h2>                <TextField variant="standard" label="name" fullWidth value={name} onChange={(e)=>{setName(e.target.value)}}></TextField>
                <br />
                <br />
                <TextField variant="standard" label="price" fullWidth value={price} onChange={(e)=>{setPrice(e.target.value)}}></TextField>
                <br />
                <br />
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={9}>            
                <Button 
                variant="contained" 
                color="primary" 
                onClick={(e)=>{
                    console.log("send api call to axios");
                    //axios
                    productService
                    .addProduct({name, price})
                    //.post("http://localhost:5000/api/products", {name, price}, /*{headers: { 'Authorization': 'Bearer' + accessToken }}*/)
                    .then((data) =>{
                    //.then((res)=>{
                        console.log(data);
                        //console.log(res.data);
                        props.history.push("/products")
                    })
                    .catch((err)=>{
                    console.log(err);
                    toast.error(err.response.data, {
                        position: toast.POSITION.TOP_LEFT
                    })
                })
                }
            }
                >Add New Product</Button>
                <br />
                <br />
                <br />
            </Grid>
            
        </Grid>
     )
}

export default NewProduct;