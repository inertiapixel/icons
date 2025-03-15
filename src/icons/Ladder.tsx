import * as React from "react";
import type { SVGProps } from "react";
const SvgLadder = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ladder_svg__a)"
    >
      <path d="M8 3v18M16 3v18M8 14h8M8 10h8M8 6h8M8 18h8" />
    </g>
    <defs>
      <clipPath id="ladder_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLadder;
