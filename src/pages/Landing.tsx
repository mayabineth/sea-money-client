import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import landingLogo from "../assets/images/landingLogo.svg";

// const logo = require("./saving.svg");
const Landing = () => {
  return (
    <Wrapper>
      <nav></nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Sea <span>Money</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            eveniet veritatis dicta sed officia nam ipsum. Et pariatur hic
            voluptatibus voluptas! Quos incidunt repudiandae, ullam veritatis
            rerum maiores pariatur! Ea!
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={landingLogo} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
