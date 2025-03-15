import * as React from "react";
import type { SVGProps } from "react";
const SvgWheel = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wheel_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0M3 12h6M15 12h6M13.602 9.402l3.4-4.8M10.4 14.602l-3.4 4.8M7 4.602l3.4 4.8M13.602 14.602l3.4 4.8" />
    </g>
    <defs>
      <clipPath id="wheel_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWheel;
