import * as React from "react";
import type { SVGProps } from "react";
const SvgGrid3X3 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#grid-3x3_svg__a)"
    >
      <path d="M3 8h18M3 16h18M8 3v18M16 3v18" />
    </g>
    <defs>
      <clipPath id="grid-3x3_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGrid3X3;
