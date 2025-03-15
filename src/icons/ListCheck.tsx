import * as React from "react";
import type { SVGProps } from "react";
const SvgListCheck = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#list-check_svg__a)"
    >
      <path d="M3.5 5.5 5 7l2.5-2.5M3.5 11.5 5 13l2.5-2.5M3.5 17.5 5 19l2.5-2.5M11 6h9M11 12h9M11 18h9" />
    </g>
    <defs>
      <clipPath id="list-check_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgListCheck;
