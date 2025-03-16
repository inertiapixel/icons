import * as React from "react";
import type { SVGProps } from "react";
const SvgRouteXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#route-x-icon_svg__a)"
    >
      <path d="m3 17 4 4M7 17l-4 4M17 3l4 4M21 3l-4 4M11 19h5.5a3.5 3.5 0 1 0 0-7h-8a3.5 3.5 0 1 1 0-7H13" />
    </g>
    <defs>
      <clipPath id="route-x-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRouteXIcon;
