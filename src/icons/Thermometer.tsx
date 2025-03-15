import * as React from "react";
import type { SVGProps } from "react";
const SvgThermometer = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#thermometer_svg__a)"
    >
      <path d="M19 5a2.83 2.83 0 0 1 0 4l-8 8H7v-4l8-8a2.827 2.827 0 0 1 4 0M16 7l-1.5-1.5M13 10l-1.5-1.5M10 13l-1.5-1.5M7 17l-3 3" />
    </g>
    <defs>
      <clipPath id="thermometer_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThermometer;
