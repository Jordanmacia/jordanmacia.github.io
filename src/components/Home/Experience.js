import React from "react";
import { useTranslation } from "react-i18next";
import { FiBriefcase } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const jobs = [
  { key: "orange", company: "Orange Cyberdefense", tasks: 3, tags: ["Pentesting", "Web security", "Reporting"] },
  { key: "doomap", company: "Doomap", tasks: 4, tags: ["Pentesting", "Infrastructure migration", "AI / VoIP"] },
  { key: "telecom", company: "Andorra Telecom", tasks: 3, tags: ["SIEM / EDR", "NOC / SOC", "Incident response"] },
];

export default function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" className="pf-section" aria-labelledby="experience-title">
      <SectionHeading id="experience-title" icon={FiBriefcase} title={t("experience_heading")} />
      <ol className="pf-timeline">
        {jobs.map((job, index) => (
          <li key={job.key} className={index === 0 ? "pf-job pf-job-current" : "pf-job"}>
            <div className="pf-job-meta">
              <h3>{t(`${job.key}_role`)}</h3>
              <p className="pf-company">{job.company}</p>
              <p className="pf-period">{t(`${job.key}_period`).replace(/^\(|\)$/g, "")}</p>
            </div>
            <div className="pf-job-copy">
              <ul>{Array.from({ length: job.tasks }, (_, task) => (
                <li key={task}>{t(`${job.key}_task_${task + 1}`)}</li>
              ))}</ul>
              <ul className="pf-tags" aria-label={t("skills")}>
                {job.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
