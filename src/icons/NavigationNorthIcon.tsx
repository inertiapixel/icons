import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationNorthIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#navigation-north-icon_svg__a)"
    >
      <path d="m16 21-4-8-4 8 4-2zM10 9V3l4 6V3" />
    </g>
    <defs>
      <clipPath id="navigation-north-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNavigationNorthIcon;
