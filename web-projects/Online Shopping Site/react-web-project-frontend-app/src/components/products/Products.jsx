import React from "react";
import SingleProduct from "./SingleProduct";
import { Grid, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import productService from "../../services/ProductService";
import userService from "../../services/UserService";

/*import { ClassNames } from "@emotion/react";
import { makeStyles} from "@mui/material/styles";

const useStyles = makeStyles ((theme) => ({
     addBtn:{
        position: "absolute",
        top: theme.spacing(2),
        right: theme.spacing(2)
    },

}))*/

    const Products = (props) => {
        /*const classes = useStyles()*/

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
        console.log("Inside Product Components");

        const handleNewProductClick = () => {
            console.log(props);
            props.history.push("/products/new")
        }

        return ( 
            <div>
                
                <div style={{display: "flex", alignItems:"center"}}>
                <h1 style={{width:"1150px", padding:"40px", height: "0px"}}>Products</h1>                
                
                {userService.isLoggedIn() && (
                <Fab color="primary" aria-label="add"  /*className={classes.addBtn}*/ onClick={handleNewProductClick}>
                    <AddIcon />
                </Fab>
                )
                } 
                </div>

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
 
export default Products