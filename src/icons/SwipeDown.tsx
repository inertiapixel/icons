import * as React from "react";
import type { SVGProps } from "react";
const SvgSwipeDown = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#swipe-down_svg__a)"
    >
      <path d="M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8M12 12v8M9 17l3 3 3-3" />
    </g>
    <defs>
      <clipPath id="swipe-down_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSwipeDown;
