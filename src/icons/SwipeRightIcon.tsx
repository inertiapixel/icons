import * as React from "react";
import type { SVGProps } from "react";
const SvgSwipeRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#swipe-right-icon_svg__a)"
    >
      <path d="M4 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0M12 12h8M17 15l3-3-3-3" />
    </g>
    <defs>
      <clipPath id="swipe-right-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSwipeRightIcon;
