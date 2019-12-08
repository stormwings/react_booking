import React from "react";

const SvgCalendar = props => (
  <svg tabIndex={-1} width={18} height={16} {...props}>
    <g className="prefix__svg-color--primary" fill="#37454D">
      <path d="M16 1h-1a1 1 0 00-2 0H5a1 1 0 00-2 0H2a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V3a2 2 0 00-2-2zm1 13a1 1 0 01-1 1H2a1 1 0 01-1-1V5h16v9zm0-10H1V3c0-.552.45-1 1-1h14a1 1 0 011 1v1z" />
      <circle cx={4.5} cy={8.5} r={1.5} />
    </g>
  </svg>
);

export default SvgCalendar;
