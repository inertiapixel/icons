import * as React from "react";
import type { SVGProps } from "react";
const SvgCarTurbineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#car-turbine-icon_svg__a)"
    >
      <path d="M7 13a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
      <path d="M18.86 11c.088.66.14 1.512.14 2a8 8 0 1 1-8-8h6" />
      <path d="M11 9q3.733.162 6 0M17 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM11 13l-3.5-1.5M11 13l2.5 3M8.5 16l2.5-3M11 13l3.5-1.5M11 9v4" />
    </g>
    <defs>
      <clipPath id="car-turbine-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCarTurbineIcon;
