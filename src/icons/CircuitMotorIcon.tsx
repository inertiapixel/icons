import * as React from "react";
import type { SVGProps } from "react";
const SvgCircuitMotorIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#circuit-motor-icon_svg__a)"
    >
      <path d="M5 12a7 7 0 1 0 14 0 7 7 0 0 0-14 0M5 12H2M19 12h3" />
      <path d="M10 14v-4l2 2 2-2v4" />
    </g>
    <defs>
      <clipPath id="circuit-motor-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircuitMotorIcon;
