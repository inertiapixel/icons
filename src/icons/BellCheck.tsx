import * as React from "react";
import type { SVGProps } from "react";
const SvgBellCheck = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bell-check_svg__a)"
    >
      <path d="M11.5 17H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6 2 2 0 1 1 4 0 7 7 0 0 1 4 6v3q.023.193.065.382M9 17v1a3 3 0 0 0 2.502 2.959M15 19l2 2 4-4" />
    </g>
    <defs>
      <clipPath id="bell-check_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBellCheck;
