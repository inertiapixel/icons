import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandTeams = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-teams_svg__a)"
    >
      <path d="M3 7h10v10H3zM6 10h4M8 10v4" />
      <path d="M8.105 17c.47 2.274 2.483 4 4.897 4a5 5 0 0 0 5-5V9h-5" />
      <path d="M18 18a4 4 0 0 0 4-4V9h-4M13.003 8.83a3 3 0 1 0-1.833-1.833" />
      <path d="M15.828 8.36a2.5 2.5 0 1 0 .594-4.117" />
    </g>
    <defs>
      <clipPath id="brand-teams_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandTeams;
