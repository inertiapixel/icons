import * as React from "react";
import type { SVGProps } from "react";
const SvgBow1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bow-1_svg__a)"
    >
      <path d="M17 3h4v4M21 3 6 18M3 18h3v3M16.5 20c1.576-1.576 2.5-4.095 2.5-6.5C19 8.69 15.31 5 10.5 5 8.085 5 5.578 5.913 4 7.5z" />
    </g>
    <defs>
      <clipPath id="bow-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBow1;
