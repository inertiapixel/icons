import * as React from "react";
import type { SVGProps } from "react";
const SvgHours12 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hours-12_svg__a)"
    >
      <path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13c.468 3.6 3.384 6.546 7 7M18 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2M15 21v-6" />
    </g>
    <defs>
      <clipPath id="hours-12_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHours12;
