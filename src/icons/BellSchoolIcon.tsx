import * as React from "react";
import type { SVGProps } from "react";
const SvgBellSchoolIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bell-school-icon_svg__a)"
    >
      <path d="M4 10a6 6 0 1 0 12 0 6 6 0 0 0-12 0" />
      <path d="M13.5 15h.5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h.5M16 17a5.698 5.698 0 0 0 4.467-7.932L20 8M10 10v.01" />
      <path d="M19 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </g>
    <defs>
      <clipPath id="bell-school-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBellSchoolIcon;
