import * as React from "react";
import type { SVGProps } from "react";
const SvgVacuumCleanerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#vacuum-cleaner-icon_svg__a)"
    >
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
      <path d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0M12 16h.01" />
    </g>
    <defs>
      <clipPath id="vacuum-cleaner-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVacuumCleanerIcon;
