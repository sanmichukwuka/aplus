import React, { Component } from 'react';
import Header from '../header/Header';
import Signup from '../signup/Signup';
import EventBind from '../event/EventBind';
import AboutUs from '../aboutus/AboutUs';
import {Route, withRouter} from "react-router-dom";
import ThankYou from '../thankyou/ThankYou';
import Footer from '../footer/Footer';
import Home from '../home/Home';




  

class Layout extends Component {
    
    render() {
        let routes = (
        
            <div>
              <Route exact path = "/" component={Signup} />
                <Route path = "/sign-up" component={Signup} />
                
                <Route path = "/thankyou" component={ThankYou} />

            </div>
            );
            if(localStorage.getItem("loggedInUser")) {
                routes = (
                    <div>
                        <Route exact path = "/" component={Home} />
                        <Route path = "/home" component={Home} />
                    </div>
                )
            }
        return (
            <div>
                <Header {...this.props}/>
                <Route path = "/about-us" component={AboutUs} />
                {/* <Route path = "/thankyou" component={ThankYou} />
                <Route path = "/home" component={Home} /> */}
                {routes}
                <Footer />
            </div>
        );
    }
}

export default withRouter(Layout);