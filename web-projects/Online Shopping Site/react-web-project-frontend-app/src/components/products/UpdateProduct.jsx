import { Grid, TextField, Button } from '@mui/material';
import React from 'react';
import { toast } from 'react-toastify';
import productService from '../../services/ProductService';

const UpdateProduct = (props) => {
    const [name, setName] = React.useState("")
    const [price, setPrice] = React.useState([0])
    const id = props.match.params.id
    console.log(props.match.params.id);

    React.useEffect(() => {
        productService.getSingleProduct(id).then((data) => {
            setName(data.name)
            setPrice(data.price)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <Grid container spacing={3}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
            <h1>Update Product</h1>
                <TextField label="name" fullWidth value={name} onChange={(e)=>{setName(e.target.value)}}></TextField>
                <br />
                <br />
                <TextField label="price" fullWidth value={price} onChange={(e)=>{setPrice(e.target.value)}}></TextField>
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
                    .updateProduct(id, {name, price})
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
                >Update Product</Button>
                <br />
                <br />
                <br />
            </Grid>
            
        </Grid>
     )
}

export default UpdateProduct;