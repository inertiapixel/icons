import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationCheck = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#navigation-check_svg__a)"
    >
      <path d="M17.488 14.894 12 3 4.03 20.275c-.07.2-.018.424.134.572.15.148.374.193.57.116l6.276-2.127M15 19l2 2 4-4" />
    </g>
    <defs>
      <clipPath id="navigation-check_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNavigationCheck;
