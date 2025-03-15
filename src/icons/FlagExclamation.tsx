import * as React from "react";
import type { SVGProps } from "react";
const SvgFlagExclamation = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#flag-exclamation_svg__a)"
    >
      <path d="M15.035 15.408A4.98 4.98 0 0 1 12 14a5 5 0 0 0-7 0V5a5 5 0 0 1 7 0 5 5 0 0 0 7 0v7M5 21v-7M19 16v3M19 22v.01" />
    </g>
    <defs>
      <clipPath id="flag-exclamation_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFlagExclamation;
