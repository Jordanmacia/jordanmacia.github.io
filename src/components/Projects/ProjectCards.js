import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaCube, FaCloud, FaStickyNote, FaGraduationCap } from "react-icons/fa";

function getPlainText(element) {
  if (typeof element === "string") {
    return element;
  }
  if (Array.isArray(element)) {
    return element.map(getPlainText).join("");
  }
  if (element && typeof element === "object" && "props" in element) {
    return getPlainText(element.props.children);
  }
  return "";
}

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
    courseLink,
    certificationLink,
    alwaysShowDescription,
    isLinuxCourse,
    isHackingCourse,
  } = props;

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  const plainTextDescription = getPlainText(description);
  let truncatedDescription;
  if (title === "Cours d'Initiation à Linux") {
    truncatedDescription = plainTextDescription.slice(0, 98) + "";
  } else if (title === "Cours d'Initiation au Hacking") {
    truncatedDescription = plainTextDescription.slice(0, 106) + "";
  } else {
    truncatedDescription =
      plainTextDescription.length > 100
        ? plainTextDescription.slice(0, 97) + ""
        : plainTextDescription;
  }


  const shouldShowFullDescription =
    alwaysShowDescription || isLinuxCourse || isHackingCourse;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {shouldShowFullDescription || showFullDescription
            ? description
            : truncatedDescription}
        </Card.Text>

        {!alwaysShowDescription && (
          <Button
            variant="link"
            onClick={toggleDescription}
            className="custom-info-button"
          >
            {showFullDescription ? "Réduire" : "Plus d'info"}
          </Button>
        )}

        <br />
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
