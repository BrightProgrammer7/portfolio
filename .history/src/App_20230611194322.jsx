import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Portfolio, Home, About, Projects, Contact, Articles, NotFound, HomePage } from "./pages";




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
          <Route path="*" element={<NotFound />} />
          ‹div className-"relative z-0 bg-primary">
          ‹div className-"bg-hero-pattern bg-cover
bg-no-repeatbg-center">
‹Navbar />
‹Hero />
        </div>
‹About /›
‹Experience />
        <Tech />
        ‹Works /›
‹Feedbacks />
‹div className="relative z-0">
‹Contact >
        «StarsCanvas /›
      </div>
    </div >
        </Routes >
      </Router >
    </>
  );
}

export default App;
