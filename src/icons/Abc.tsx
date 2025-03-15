import * as React from "react";
import type { SVGProps } from "react";
const SvgAbc = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#abc_svg__a)"
    >
      <path d="M3 16v-6a2 2 0 1 1 4 0v6M3 13h4M10 8v6m0 0a2 2 0 0 0 4 0v-1a2 2 0 0 0-4 0zM20.732 12A2 2 0 0 0 17 13v1a2 2 0 0 0 3.726 1.01" />
    </g>
    <defs>
      <clipPath id="abc_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAbc;
