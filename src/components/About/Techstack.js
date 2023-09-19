import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiHtml5,
  DiReact,
  DiCss3,
  DiC,
  DiGit,
} from "react-icons/di";
import {
  SiVuedotjs,
  SiAngular,
  SiAmazonaws,
  SiExpress,
  SiRedux
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
