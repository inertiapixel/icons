import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowForwardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#arrow-forward-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15 11 4 4m0 0-4 4m4-4H8a4 4 0 1 1 0-8h1"
      />
    </g>
    <defs>
      <clipPath id="arrow-forward-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowForwardIcon;
