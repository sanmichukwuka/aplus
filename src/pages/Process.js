import React from "react";
import page from "/Users/michaeloluh/Desktop/aplus/src/images/page.jpg";
import plainblue from "/Users/michaeloluh/Desktop/aplus/src/images/page.jpg";

function Process() {
  return (
    <>
    <div>
      <div class="container">
        <img src={plainblue.png} alt="Nature" style={{width:"100%", marginTop: "30px" }} />
        <div class="text-block">
          <h4>Amit Cleaning</h4>
          <p>Cleaning you deserve</p>
        </div>
      </div>
      
      <img src={page} style={{ width: "100%", marginTop: "30px" }} />
      <div className="home">
        <h1>
          Everyone wants a beautifully maintained home, but with increased work
          hours, long commutes and family obligations, very few have the time.{" "}
        </h1>
        <h4>That's where we come in.</h4>
        AM Cleaning Services aims to been deliver a reliable, efficient and
        trustworthy cleaning service for more than X years. Our expert staff go
        above and beyond to deliver sparkling results and our rigorous training
        ensures that your home is always treated with professionalism and
        respect. In the next few pages, you will find further details about what
        we can do for you, and if you want to proceed, just enter your name to
        accept. If you have any questions, please let us know.
        <h1>Amina Ture</h1>
        <h1> AM cleans </h1>
      </div>
    </div>

    </>
  );
}

export default Process;
