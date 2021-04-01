import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { Jumbotron } from "reactstrap";
// import logo from '../images/logo.jpg'

function Navbar() {
  const [sidebar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sidebar);
  return (
    <>
       <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col-md-1">
                {/* {/<img className="logo" src={logo} alt="aplus image"/>/} */}
                
              </div>
              <div className="col-md-12">
      
                <Link to="/book-now" className="btn btn-success">
                  click to get cleaning quote
                </Link>
                <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" />1-206-555-1234</a><br />
                {/* <h1>Amit Cleaning</h1> */}
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>

      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar ml-auto">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              {/* <img className="logo" src={logo} alt="aplus image"/> */}
              {/* <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link> */}
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
































// import React, { useState } from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";
// import "./Navbar.css";
// import { IconContext } from "react-icons";
// import { Jumbotron } from "reactstrap";
// import logo from '../images/logo.jpg'

// function Navbar() {
//   const [sidebar, setSideBar] = useState(false);

//   const showSidebar = () => setSideBar(!sidebar);
//   return (
//     <>
//        <React.Fragment>
//         <Jumbotron fluid>
//           <div className="container">
//             <div className="row">
//               <div className="col-md-1">
//                 <img className="logo" src={logo} alt="aplus image"/>
//               </div>
//               <div className="col-md-9">
//                 <Link to="/register" className="btn btn-primary">
//                   Schedule Appointment
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Jumbotron>
//       </React.Fragment>

//       <IconContext.Provider value={{ color: "red" }}>
//         <div className="navbar ml-auto">
//           <Link to="#" className="menu-bars">
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
//         </div>
//         <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//           <ul className="nav-menu-items" onClick={showSidebar}>
//             <li className="navbar-toggle">

//               <Link to="#" className="menu-bars">
//                 {/* <AiIcons.AiOutlineClose /> */}
//                 <img className="logo" src={logo} alt="aplus image"/>
//               </Link>
//             </li>
//             {SidebarData.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );
// }

// export default Navbar;



















// import React, { useState } from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";
// import "./Navbar.css";
// import { IconContext } from "react-icons";
// import { Jumbotron } from "reactstrap";
// import logo from "/Users/michaeloluh/Desktop/aplus/src/images/logo.jpg";

// function Navbar() {
//   const [sidebar, setSideBar] = useState(false);

//   const showSidebar = () => setSideBar(!sidebar);
//   return (
//     <>
//        <React.Fragment>
//         <Jumbotron fluid>
//           <div className="container">
//             <div className="row">
//               <div className="col">
//               <img src={logo} style={{ width: "10%" }} /> 
//                 <Link to="/register" className="btn btn-primary">
//                   Schedule Appointment
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Jumbotron>
//       </React.Fragment>

//       <IconContext.Provider value={{ color: "red" }}>
//         <div className="navbar ml-auto">
//           <Link to="#" className="menu-bars">
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
//         </div>
//         <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//           <ul className="nav-menu-items" onClick={showSidebar}>
//             <li className="navbar-toggle">
//               {/* <Link to="#" className="menu-bars">
//                 <AiIcons.AiOutlineClose />
//               </Link> */}
//             </li>
//             {SidebarData.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );
// }

// export default Navbar;
