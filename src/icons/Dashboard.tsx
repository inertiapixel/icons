import * as React from "react";
import type { SVGProps } from "react";
const SvgDashboard = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#dashboard_svg__a)"
    >
      <path d="M10 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0M13.45 11.55 15.5 9.5" />
      <path d="M6.4 19.999a9 9 0 1 1 11.2 0z" />
    </g>
    <defs>
      <clipPath id="dashboard_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDashboard;
