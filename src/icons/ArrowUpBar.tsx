import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpBar = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-up-bar_svg__a)"
    >
      <path d="M12 21V3M15 6l-3-3-3 3M9 21h6" />
    </g>
    <defs>
      <clipPath id="arrow-up-bar_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowUpBar;
