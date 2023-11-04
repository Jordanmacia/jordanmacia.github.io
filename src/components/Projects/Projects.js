import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="HackTheBox & TryHackMe"
              description="HackTheBox and TryHackme are two platforms where I regularly practice, facing real environments that present various situations and challenges, such as exploiting vulnerabilities, solving security puzzles, and privilege escalation. These experiences allow me to improve my cybersecurity skills and be prepared for real-world situations."
              cubeLink="https://app.hackthebox.com/profile/1345367"
              cloudLink="https://tryhackme.com/p/jord4n"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Introduction to Hacking Course"
              description="This course has taken approximately 150 hours of my time. Despite being an introductory course, it has provided me with a strong foundation to start in the world of ethical hacking. I've gained a solid understanding and taken very useful notes with Obsidian, which are in the Hacking Notes section. I've learned everything from conducting network scans, which includes identifying devices, enumerating domains, subdomains, files, and web technologies, as well as identifying ports and subsequently enumerating common services and content management systems like FTP, SSH, WordPress, and Joomla. I've also delved into specific concepts, such as using Docker environments, in-depth knowledge of the top 10 OWASP vulnerabilities, and other web vulnerabilities. I've acquired knowledge of privilege escalation techniques, basics of Buffer Overflow, and solved five machines with different vulnerabilities presented during the course. As additional material, I've explored the use of Metasploit, SQLMAP, and pivoting techniques. In conclusion, I've learned how to write reports and reports using LaTeX."
              courseLink="https://hack4u.io/cursos/introduccion-al-hacking/"
              notesLink="/resume/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Introduction to Linux Course"
              description="This course has taken me approximately around 40 hours to complete, during which I've learned all the fundamentals of Linux, including commands, interpreting normal and SUID permissions, using cron for scheduled tasks, data and binary file encryption, encoding and decoding, as well as managing keys and SSH connections. I've also carried out a final project that involved writing Bash scripts to simulate two famous techniques used in casinos: the Martingale and the Inverse La Brouchere. The goal was to challenge the casino roulette, and to achieve this, I developed and defined the logic of several commonly used techniques. The ultimate purpose was to determine if these techniques are genuinely effective and ultimately demonstrate that, in the end, the house always has the advantage."
               courseLink="https://hack4u.io/cursos/introduccion-a-linux/"
              ghLink="https://github.com/Jordanmacia/Losse-Betting-Simulator"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Web-Exploit-Scripts"
              description="During my introductory hacking course, I have developed several scripts that automate the necessary processes for practicing Python and Bash scripting related to the 10 OWASP vulnerabilities, as well as other web vulnerabilities."
              ghLink="https://github.com/Jordanmacia/Web-Exploit-Scripts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="eJPT Certification"
              description="My goal for 2024 is to obtain the EJPTv2 certificate, which involves demonstrating my expertise in identifying and resolving vulnerabilities, protecting networks, and managing cybersecurity threats. Furthermore, it will enable me to advance in my cybersecurity career and contribute more effectively to information and online security."
              certificationLink="https://security.ine.com/certifications/ejpt-certification/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
