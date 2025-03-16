import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-left-icon_svg__a)"
    >
      <path d="M3 7h18M6 20l-3-3 3-3M6 4 3 7l3 3M3 17h18" />
    </g>
    <defs>
      <clipPath id="arrows-left-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsLeftIcon;
