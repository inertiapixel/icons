import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodPinIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-pin-icon_svg__a)"
    >
      <path d="M21 12a9 9 0 1 0-8.352 8.977M9 10h.01M15 10h.01" />
      <path d="M9.5 15c.658.672 1.56 1 2.5 1q.153 0 .304-.012M21.121 20.122a3 3 0 1 0-4.242 0Q17.506 20.75 19 22q1.577-1.334 2.121-1.88M19 18v.01" />
    </g>
    <defs>
      <clipPath id="mood-pin-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodPinIcon;
