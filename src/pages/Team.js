import React from "react";
import page from "/Users/michaeloluh/Desktop/aplus/src/images/page.jpg";
import fargomn from "/Users/michaeloluh/Desktop/aplus/src/images/fargomn.jpg";


function Team() {
  return (
    <div>
      {/*<h1>Home</h1>*/}
      <img src={fargomn} style={{ width: "100%", marginTop: "30px" }} />
      
      <div className="team">
      <p className="intro">
      Commercial Cleaning Services Fargo ND
      Keep your Fargo facility disinfected and looking its best with our reliable & affordable commercial cleaning services. 
      We service all Fargo, North Dakota and surrounding areas. With our 24/7 availability and a 100% satisfaction guarantee you can rest assured your facility is getting the best cleaning, at your convenience.
          </p>
      </div>
    </div>
  );
}

export default Team;