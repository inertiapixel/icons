import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRampRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-ramp-right-icon_svg__a)"
    >
      <path d="M7 3v8.707M11 7 7 3 3 7M17 14l4-4-4-4" />
      <path d="M7 21a11 11 0 0 1 11-11h3" />
    </g>
    <defs>
      <clipPath id="arrow-ramp-right-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowRampRightIcon;
