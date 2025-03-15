import * as React from "react";
import type { SVGProps } from "react";
const SvgListNumbers = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#list-numbers_svg__a)"
    >
      <path d="M11 6h9M11 12h9M12 18h8M4 16a2 2 0 0 1 4 0c0 .591-.5 1-1 1.5L4 20h4M6 10V4L4 6" />
    </g>
    <defs>
      <clipPath id="list-numbers_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgListNumbers;
