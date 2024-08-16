import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import {
  FaCube,
  FaCloud,
  FaStickyNote,
  FaGraduationCap
} from "react-icons/fa";

function ProjectCards(props) {
  const {
    imgPath,
    title,
    description,
    ghLink,
    isBlog,
    demoLink,
    cubeLink,
    cloudLink,
    notesLink,
    courseLink, // Added a comma here
    certificationLink,
  } = props;
  
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>

        <br /> {/* Add a line break instead of {"\n"} for readability */}
        <br /> {/* Another line break for spacing */}

        {/* Render Demo link if it's not a Blog */}
        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}

        {/* Add links with the new icons and corresponding properties */}
        {cubeLink && (
          <Button
            variant="primary"
            href={cubeLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaCube /> &nbsp; HackTheBox
          </Button>
        )}

        {cloudLink && (
          <Button
            variant="primary"
            href={cloudLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaCloud /> &nbsp; TryHackMe
          </Button>
        )}
        
        

        {notesLink && (
          <Button
            variant="primary"
            href={notesLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaStickyNote /> &nbsp; Hacking Notes
          </Button>
        )}

        {ghLink && (
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}  

        {courseLink && (
          <Button
            variant="primary"
            href={courseLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaGraduationCap /> &nbsp; Cours
          </Button>
        )}

        {certificationLink && (
          <Button
            variant="primary"
            href={certificationLink}
            target="_blank"
            style={{ marginLeft: "10px" }}

          >
            <FaGraduationCap /> &nbsp; Certification
          </Button>
        )}  

      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
