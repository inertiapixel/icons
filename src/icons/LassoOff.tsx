import * as React from "react";
import type { SVGProps } from "react";
const SvgLassoOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#lasso-off_svg__a)"
    >
      <path d="M4.028 13.252C3.371 12.28 3 11.174 3 10c0-1.804.878-3.449 2.319-4.69m2.49-1.506A11.1 11.1 0 0 1 12 3c4.97 0 9 3.134 9 7 0 1.8-.873 3.44-2.307 4.68m-2.503 1.517c-1.331.537-2.755.81-4.19.803-1.913 0-3.686-.464-5.144-1.255" />
      <path d="M3 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M5 17c0 1.42.316 2.805 1 4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="lasso-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLassoOff;
