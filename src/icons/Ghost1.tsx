import * as React from "react";
import type { SVGProps } from "react";
const SvgGhost1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ghost-1_svg__a)"
    >
      <path d="M4.998 11a7 7 0 1 1 14 0v7a1.78 1.78 0 0 1-3.1 1.4 1.65 1.65 0 0 0-2.6 0 1.65 1.65 0 0 1-2.6 0 1.65 1.65 0 0 0-2.6 0 1.78 1.78 0 0 1-3.1-1.4zM10 10h.01M14 10h.01" />
      <path d="M10 14a3.5 3.5 0 0 0 4 0" />
    </g>
    <defs>
      <clipPath id="ghost-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGhost1;
