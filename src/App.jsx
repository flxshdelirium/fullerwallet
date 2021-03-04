import "./app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Setup from "./components/Setup";
import Hero from "./components/Hero";
import Download from "./components/Download";
import Features from "./components/Features";
import Error from "./components/auxiliary/Error";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Setup />
      <Features />
      <Newsletter />
      <FAQ />
      <Download />
      <Footer />
    </>
  );
};

export default App;
