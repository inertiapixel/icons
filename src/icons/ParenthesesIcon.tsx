import * as React from "react";
import type { SVGProps } from "react";
const SvgParenthesesIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#parentheses-icon_svg__a)"
    >
      <path d="M7 4a12.25 12.25 0 0 0 0 16M17 4a12.25 12.25 0 0 1 0 16" />
    </g>
    <defs>
      <clipPath id="parentheses-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgParenthesesIcon;
