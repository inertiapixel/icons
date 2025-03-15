import * as React from "react";
import type { SVGProps } from "react";
const SvgTheater = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#theater_svg__a)"
    >
      <path d="M4 20h16M20 16V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10l4-6q4 2 8 0z" />
    </g>
    <defs>
      <clipPath id="theater_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTheater;
