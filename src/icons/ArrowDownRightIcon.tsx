import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-down-right-icon_svg__a)"
    >
      <path d="m7 7 10 10M17 8v9H8" />
    </g>
    <defs>
      <clipPath id="arrow-down-right-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowDownRightIcon;
