import React from "react";

export default function SectionHeading({ id, icon: Icon, title }) {
  return (
    <div className="pf-section-heading">
      <h2 id={id}><Icon aria-hidden="true" /> {title}</h2>
      <span aria-hidden="true" />
    </div>
  );
}
