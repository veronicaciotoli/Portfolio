import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Veronica Ciotoli </span>
            from <span className="purple"> Frosinone, Italy.</span>
            <br /> I have a degree in Health Biotechnology,
            <br />
            Later I worked as a Barlady and manager of a restaurant for seven years...
            <br />
            <br />
            <span className="purple">Finally I found the right way for me...</span>
            <br/>
            The programming!
            <br/>
            <br />
            I attended a 500 hour course at Generation Italy,
            <br />
            I cant' wait to put what I learned into practice
            and
            <br /> Learn Much More!
            <br />
            <br />
            My hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Making Puzzles
            </li>
            <li className="about-activity">
              <ImPointRight /> Partying
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
