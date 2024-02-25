import { Button, Grid } from '@mui/material';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import productService from '../../services/ProductService';
import userService from '../../services/UserService';
import photo from "./photo.jpg"

const SingleProduct = (props) => {
    const {product, onDelete, history} = props
    console.log(props);
    return ( 
        <Grid item xs={3} style={{}}>
            <img className='img' src={photo} alt="" style={{height:"12rem", width:"12rem", padding:"40px", paddingTop:"0px", paddingBottom:"0px", borderRadius:"3rem"}} />
            <h2 style={{padding:"40px", paddingTop:"0px", paddingBottom:"0px"}}>
                {product.name}
            </h2>
            <h3 style={{padding:"40px", paddingTop:"0px", paddingBottom:"0px"}}>
                {product.price+"$"}                
                <br/><br/>
                {
                userService.getLoggedInUser() ? (
                <>  
                <Button variant="contained" color="primary"
                onClick={(e)=>{console.log("navigate to update");
                history.push("/products/update/"+product._id)}}
                >Edit</Button>
                <Button variant="contained" color="secondary" 
                onClick={(e)=>{productService.deleteProduct(product._id)
                .then((data) => {console.log(data); onDelete()})
                .catch((err) => {console.log(err);
                    toast.error(err.response.data, {
                    position: toast.POSITION.TOP_LEFT
                })})}}>Delete</Button><br /><br />
                <Button variant="contained" color="primary">Add to Cart</Button>
                </>)
                :(console.log("i am out"))}
                <hr/> 
            </h3>
        </Grid>
     );
}
 
export default withRouter(SingleProduct);