import * as React from "react";
import type { SVGProps } from "react";
const SvgRainbow = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#rainbow_svg__a)"
    >
      <path d="M22 17c0-5.523-4.477-10-10-10S2 11.477 2 17" />
      <path d="M18 17a6 6 0 1 0-12 0" />
      <path d="M14 17a2 2 0 0 0-4 0" />
    </g>
    <defs>
      <clipPath id="rainbow_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRainbow;
