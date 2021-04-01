import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../src/images/facebook.png';
import instagram from '../../src/images/instagram.jpg';
import twitter from '../../src/images/twitter.jpeg';
import youtube from '../../src/images/youtube.jpg';
import "./footer.css"

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/directory'>Directory</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">
                            <img src={instagram} alt="aplus image"/>
                        </a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/">
                            <img src={facebook} alt="aplus image"/>
                        </a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                            <img src={twitter} alt="aplus image"/>
                        </a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/">
                            <img src={youtube} alt="aplus image"/>
                        </a>
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;