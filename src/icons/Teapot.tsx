import * as React from "react";
import type { SVGProps } from "react";
const SvgTeapot = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#teapot_svg__a)"
    >
      <path d="M10.29 3h3.42a2 2 0 0 1 1.987 1.78l1.556 14A2 2 0 0 1 15.264 21h-6.53a2 2 0 0 1-1.987-2.22l1.555-14A2 2 0 0 1 10.29 3" />
      <path d="M7.47 12.5 3.215 7.481A.899.899 0 0 1 3.904 6h13.09A3 3 0 0 1 20 9v3c0 1.657-1.346 3-3.007 3M7 17h10" />
    </g>
    <defs>
      <clipPath id="teapot_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTeapot;
