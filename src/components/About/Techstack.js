import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiTrello,
  DiMysql,
  DiGit,
  DiJava,
  DiScrum,
  DiVisualstudio,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiTrello />
      </Col>
      
    </Row>
  );
}

export default Techstack;
