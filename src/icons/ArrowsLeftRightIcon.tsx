import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsLeftRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-left-right-icon_svg__a)"
    >
      <path d="M21 17H3M6 10 3 7l3-3M3 7h18M18 20l3-3-3-3" />
    </g>
    <defs>
      <clipPath id="arrows-left-right-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsLeftRightIcon;
