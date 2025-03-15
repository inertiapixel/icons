import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationEast = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#navigation-east_svg__a)"
    >
      <path d="M14 3h-4v6h4M10 6h2.5M16 21l-4-8-4 8 4-2z" />
    </g>
    <defs>
      <clipPath id="navigation-east_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNavigationEast;
