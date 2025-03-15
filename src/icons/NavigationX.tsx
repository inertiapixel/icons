import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationX = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#navigation-x_svg__a)"
    >
      <path d="M16.623 13.02 12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116l7.266-2.463 1.563.53M22 22l-5-5M17 22l5-5" />
    </g>
    <defs>
      <clipPath id="navigation-x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNavigationX;
