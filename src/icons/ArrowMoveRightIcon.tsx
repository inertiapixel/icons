import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowMoveRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-move-right-icon_svg__a)"
    >
      <path d="M11 12h10M18 9l3 3-3 3M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </g>
    <defs>
      <clipPath id="arrow-move-right-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowMoveRightIcon;
