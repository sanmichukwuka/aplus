import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import BookNow from "./pages/Book-Now";
import Process from "./pages/Process";
import Team from "./pages/Team";
import NextSteps from "./pages/NextSteps";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/book-now" component={BookNow} />
        <>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/process" exact component={Process} />
          <Route path="/team" component={Team} />
          <Route path="/next-steps" component={NextSteps} />
          <Footer />
        </>
      </Switch>
    </Router>
  );
}

export default App;












// import "./App.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import ContactUs from "./pages/ContactUs";
// import Register from "./pages/Register";
// import BookNow from "./pages/Book-Now";
// import Process from "./pages/Process";
// import Team from "./pages/Team";
// import NextSteps from "./pages/NextSteps";

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/register" component={Register} />
//         <Route path="/book-now" component={BookNow} />
//         <>
//           <Navbar />
//           <Route path="/" exact component={Home} />
//           <Route path="/services" component={Services} />
//           <Route path="/contactus" component={ContactUs} />
//           <Route path="/process" exact component={Process} />
//           <Route path="/team" component={Team} />
//           <Route path="/next-steps" component={NextSteps} />
//           <Footer />
//         </>
//       </Switch>
//     </Router>
//   );
// }

// export default App;
