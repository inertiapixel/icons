import * as React from "react";
import type { SVGProps } from "react";
const SvgBinary = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#binary_svg__a)"
    >
      <path d="M11 10V5h-1m8 14v-5h-1M15 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zM10 14.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zM6 10h.01M6 19h.01" />
    </g>
    <defs>
      <clipPath id="binary_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBinary;
