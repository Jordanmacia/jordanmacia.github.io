import React from "react";
import { useTranslation } from "react-i18next";
import { FiCode, FiArrowUpRight, FiTrendingUp } from "react-icons/fi";
import HackingNotes from "../../Assets/Projects/hacking-notes.png";
import HtbPortSwigger from "../../Assets/Projects/hackthebox-portswigger.png";
import HackingNotesAvif from "../../Assets/Optimized/hacking-notes.avif";
import HtbPortSwiggerAvif from "../../Assets/Optimized/hackthebox-portswigger.avif";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    { key: "notes", title: "Hacking Notes", description: "notes_summary",
      tags: ["Offensive security", "Knowledge sharing", "Write-ups"],
      metric: "notes_visits",
      href: "https://hacking-notes.jord4n.pro/", link: "visit_notes", image: HackingNotes, avif: HackingNotesAvif },
    { key: "htb", title: "Hack The Box & PortSwigger", description: "htb_summary", extraDescription: "portswigger_summary",
      tags: ["Linux / Windows", "CTF", "HTB Academy", "Web labs"], image: HtbPortSwigger, avif: HtbPortSwiggerAvif },
  ];

  return (
    <section id="project" className="pf-section" aria-labelledby="project-title">
      <SectionHeading id="project-title" icon={FiCode} title={t("projects_heading")} />
      <div className="pf-project-list">
        {projects.map((project) => (
          <article key={project.key} className="pf-project">
            {project.href ? (
              <a className="pf-preview-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={project.title}>
                <div className="pf-project-preview pf-project-image">
                  <picture>
                    <source srcSet={project.avif} type="image/avif" />
                    <img src={project.image} alt={project.title} loading="lazy" decoding="async" width="1735" height="906" />
                  </picture>
                </div>
              </a>
            ) : (
              <div className="pf-project-preview pf-project-image">
                <picture>
                  <source srcSet={project.avif} type="image/avif" />
                  <img src={project.image} alt={project.title} loading="lazy" decoding="async" width="1672" height="941" />
                </picture>
              </div>
            )}
            <div className="pf-project-copy">
              <h3>{project.title}</h3>
              {project.metric && (
                <div className="pf-project-metric"><FiTrendingUp aria-hidden="true" /><strong>+100k</strong><span>{t(project.metric)}</span></div>
              )}
              <ul className="pf-tags" aria-label={t("skills")}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <p>{project.extraDescription && <strong>Hack The Box : </strong>}{t(project.description)}</p>
              {project.extraDescription && <p><strong>PortSwigger : </strong>{t(project.extraDescription)}</p>}
              {project.href && (
                <a className="pf-button pf-project-button" href={project.href} target="_blank" rel="noopener noreferrer">
                  {t(project.link)} <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
