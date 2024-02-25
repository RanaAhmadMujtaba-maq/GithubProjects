import { Grid } from "@mui/material";
import React from "react";
import productService from "../services/ProductService";
import SingleProduct from "./products/SingleProduct";
import image from "../components/image.jpg"

const LandingPage = () => {

    const [data, setProducts] = React.useState([/*{name:"abc", price:500}, {name:"abc", price:500}*/])

        const getData =()=>{
            //axios
            productService
            .getProducts()
            //.get("http://localhost:5000/api/products")
            .then((data) =>{
            //.then((res)=>{
                setProducts(data)
                //setProducts(res.data);
                console.log(data);
                //console.log(res.data);
            })
                .catch((err)=>{
                console.log(err);
            })
        }

        React.useEffect(getData, [])
        return ( 


        <div>
            <img className="homeimg" src={image} alt="" style={{height:"25rem", width:"62.5rem", padding:"40px", paddingTop:"0px", paddingBottom:"0px"}}/> 

                <h1 style={{width:"1150px", padding:"40px", height: "0px"}}>Our Products</h1> 

                {data.length===0?(<p>There are no Products</p>):(
                <Grid container spacing={1}>
                    {
                        data.products.map((product, index)=>( <SingleProduct key={index} product={product} onDelete={getData} />))
                    }
                </Grid>
                )}
        </div>
     );
}
 
export default LandingPage;