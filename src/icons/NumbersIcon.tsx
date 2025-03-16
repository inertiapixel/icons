import * as React from "react";
import type { SVGProps } from "react";
const SvgNumbersIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#numbers-icon_svg__a)"
    >
      <path d="M8 10V3L6 5M6 16a2 2 0 0 1 4 0c0 .591-.601 1.46-1 2l-3 3h4M15 14a2 2 0 1 0 2-2 2 2 0 1 0-2-2M6.5 10h3" />
    </g>
    <defs>
      <clipPath id="numbers-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNumbersIcon;
