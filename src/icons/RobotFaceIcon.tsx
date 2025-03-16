import * as React from "react";
import type { SVGProps } from "react";
const SvgRobotFaceIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#robot-face-icon_svg__a)"
    >
      <path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
      <path d="M9 16q1.5 1 3 1t3-1M9 7 8 3M15 7l1-4M9 12v-1M15 12v-1" />
    </g>
    <defs>
      <clipPath id="robot-face-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRobotFaceIcon;
