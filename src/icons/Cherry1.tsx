import * as React from "react";
import type { SVGProps } from "react";
const SvgCherry1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cherry-1_svg__a)"
    >
      <path d="M4 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0M14 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M9 12.998c.366-2 1.866-3.873 4.5-5.6M17 15c-1.332-2.333-2.332-5.333-1-9" />
      <path d="M5 6q5.5-4 11 0-5.5 4-11 0" />
    </g>
    <defs>
      <clipPath id="cherry-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCherry1;
