import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import {Grid} from "@mui/material"
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import TopMenu from "./components/TopMenu.jsx"
import LandingPage from "./components/LandingPage.jsx"
import Products from "./components/products/Products.jsx"
import ContactUs from "./components/ContactUs.jsx"
import PageNotFound from "./components/PageNotFound.jsx"
import NewProduct from "./components/products/NewProduct"
import UpdateProduct from "./components/products/UpdateProduct.jsx"
import Register from "./components/auth/Register.jsx"
import Login from "./components/auth/Login.jsx"

function App() {
  return (
        <Grid>
          <Router>
            <div>
            <ToastContainer />

            <TopMenu></TopMenu>
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/ContactUs" exact component={ContactUs} />
              <Route path="/Products/new" component={NewProduct} />
              <Route path="/Products/update/:id" component={UpdateProduct} />
              <Route path="/Products" component={Products} />
              <Route path="/Page-Not-Found" component={PageNotFound} />
              <Route path="/" exact component={LandingPage} />
              <Redirect to="/Page-Not-Found" />
            </Switch>
            </div>/
          </Router>
        </Grid>
  );
}

export default App;
