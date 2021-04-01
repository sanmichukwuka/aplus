import React from "react";
import foldedTowels from "../images/foldedTowels.jpg";

function ContactUs() {
  return (
    <div>
      <img className="banner-image" src={foldedTowels} alt="aplus image" />
      <div className="contactus">
        <h1>Contact Us</h1>
        <p className="intro">
          Everyone wants a beautifully maintained home, but with increased work
          hours, long commutes and family obligations, very few have the time.
        </p>
        <h4>That's where we come in.</h4>
        AM Cleaning Services aims to been deliver a reliable, efficient and
        trustworthy cleaning service for more than X years. Our expert staff go
        above and beyond to deliver sparkling results and our rigorous training
        ensures that your home is always treated with professionalism and
        respect. In the next few pages, you will find further details about what
        we can do for you, and if you want to proceed, just enter your name to
        accept. If you have any questions, please let us know.
        <p className="am">Amina Ture</p>
        <h4> AM cleans </h4>
      </div>
    </div>
  );
}

export default ContactUs;
