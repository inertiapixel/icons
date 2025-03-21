import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsDiagonalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-diagonal-icon_svg__a)"
    >
      <path d="M16 4h4v4M14 10l6-6M8 20H4v-4M4 20l6-6" />
    </g>
    <defs>
      <clipPath id="arrows-diagonal-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsDiagonalIcon;
