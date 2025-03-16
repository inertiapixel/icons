import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-down-left-icon_svg__a)"
    >
      <path d="M17 7 7 17M16 17H7V8" />
    </g>
    <defs>
      <clipPath id="arrow-down-left-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowDownLeftIcon;
