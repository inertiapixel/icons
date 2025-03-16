import * as React from "react";
import type { SVGProps } from "react";
const SvgMapOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#map-off-icon_svg__a)"
    >
      <path d="M8.32 4.34 9 4l6 3 6-3v13m-2.67 1.335L15 20l-6-3-6 3V7l2.665-1.333M9 4v1m0 4v8M15 7v4m0 4v5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="map-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapOffIcon;
