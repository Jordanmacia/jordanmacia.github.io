import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useTranslation } from 'react-i18next';
import logo from "../Assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { getCurrentRouteLang, getRouteLangFromPath } from "../seoConfig";

import Button from "react-bootstrap/Button";
import { MdEmail } from "react-icons/md";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const routeLang = getRouteLangFromPath(location.pathname) || getCurrentRouteLang(i18n.language);
  const langPrefix = `/${routeLang}`;

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href={`${langPrefix}/#home`} className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link href={`${langPrefix}/#home`} onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t('home')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href={`${langPrefix}/#about`} onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t('about')}
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link href={`${langPrefix}/#project`} onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> {t('projects')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="https://hacking-notes.jord4n.pro/" target="_blank">
                <CgFileDocument style={{ marginBottom: "2px" }} /> Hacking Notes
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={`${langPrefix}/resume`}
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t('resume')}
              </Nav.Link>
            </Nav.Item>


            <Nav.Item className="fork-btn">
              <Button
                href="mailto:jordanmacia@protonmail.com"
                target="_blank"
                className="fork-btn-inner"
              >
                <MdEmail style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
