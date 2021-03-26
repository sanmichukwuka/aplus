import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import BookNow from './pages/Book-Now';

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
        </>
        
      </Switch>
    </Router>
  );
}

export default App;
