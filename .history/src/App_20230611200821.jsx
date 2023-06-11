import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Portfolio, Home, About, Projects, Contact, Articles, NotFound, HomePage } from "./pages";
import {
  Hero,
  Navbars,
  Abouts,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contacts,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas
} from
  './contexts'



function App() {
  return (
    <>
      <Router>
        {/* Use the Routes component to define the different routes for the app. */}
        <Routes>
          {/* Set up the route for the home page with the Home component. */}
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} /><Route path="/homepage" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects
          />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newportfolio" element={<NewApp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Router >
    </>
  );
}

export default App;
