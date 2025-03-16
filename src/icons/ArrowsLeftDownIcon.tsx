import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsLeftDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-left-down-icon_svg__a)"
    >
      <path d="M7 3 3 7l4 4" />
      <path d="M3 7h11a3 3 0 0 1 3 3v11" />
      <path d="m13 17 4 4 4-4" />
    </g>
    <defs>
      <clipPath id="arrows-left-down-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsLeftDownIcon;
