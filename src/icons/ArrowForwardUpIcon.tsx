import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowForwardUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-forward-up-icon_svg__a)"
    >
      <path d="m15 14 4-4-4-4" />
      <path d="M19 10H8a4 4 0 1 0 0 8h1" />
    </g>
    <defs>
      <clipPath id="arrow-forward-up-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowForwardUpIcon;
