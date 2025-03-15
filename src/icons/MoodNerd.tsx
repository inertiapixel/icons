import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodNerd = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-nerd_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M6 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M14 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M9.5 15a3.5 3.5 0 0 0 5 0M3.5 9H6M18 9h2.5M10 9.5q2-2 4 0" />
    </g>
    <defs>
      <clipPath id="mood-nerd_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodNerd;
