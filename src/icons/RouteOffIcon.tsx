import * as React from "react";
import type { SVGProps } from "react";
const SvgRouteOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#route-off-icon_svg__a)"
    >
      <path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M16 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 19h4.5c.71 0 1.371-.212 1.923-.576m1.545-2.459A3.503 3.503 0 0 0 16.5 12H16m-4 0H8.5a3.5 3.5 0 0 1-2.478-5.972M8.5 5H12M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="route-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRouteOffIcon;
