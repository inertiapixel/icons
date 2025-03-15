import * as React from "react";
import type { SVGProps } from "react";
const SvgSpray = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#spray_svg__a)"
    >
      <path d="M4 12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM6 10V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4M15 7h.01M18 9h.01M18 5h.01M21 3h.01M21 7h.01M21 11h.01M10 7h1" />
    </g>
    <defs>
      <clipPath id="spray_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpray;
