import React from "react";
import "../styles/Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import { GitHub } from "@material-ui/icons";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is elb1s</h2>
        <div className="prompt">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            perferendis, expedita aspernatur temporibus deserunt at laboriosam
            ducimus quisquam tempore cupiditate nostrum officiis atque. Porro
            nemo iusto explicabo, cupiditate voluptates possimus?
          </p>
          <Link to="/">
            <LinkedInIcon />
          </Link>
          <Link to="/">
            <EmailIcon />
          </Link>
          <Link to="/">
            <GitHub />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>

        <ol className="list">
          <li className="item">
            <h2>Your primary skill</h2>
            <span>What is that talk about that please.</span>
          </li>
          <li className="item">
            <h2>Your second skill</h2>
            <span>What is that talk about that please.</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span> English,Spanish...</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
