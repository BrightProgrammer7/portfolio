import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <h1 className='title'>HELLO in Akhmim Portfolio</h1>
      <div className= 'buttons'>
        <button className="feature" onClick={() => navigate("/portfolio")}>
          Want to see my portfolio
        </button>
        <button className="feature" onClick={() => navigate("/about")}>
          Want to read my info
        </button>
        <button className="feature" onClick={() => navigate("/contact")}>
          Want to contact me
        </button>
        <button className="feature" onClick={() => navigate("/projects")}>
          Want to see my projects{" "}
        </button>
        <button className="feature" onClick={() => navigate("/newportfolio")}>
          
        </button>
      </div>

    </div >
  );
};

export default Home;
