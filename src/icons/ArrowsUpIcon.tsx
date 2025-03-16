import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-up-icon_svg__a)"
    >
      <path d="M17 3v18M4 6l3-3 3 3M20 6l-3-3-3 3M7 3v18" />
    </g>
    <defs>
      <clipPath id="arrows-up-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsUpIcon;
