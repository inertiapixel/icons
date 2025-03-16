import * as React from "react";
import type { SVGProps } from "react";
const SvgMapCheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#map-check-icon_svg__a)"
    >
      <path d="m11 18-2-1-6 3V7l6-3 6 3 6-3v9M9 4v13M15 7v8M15 19l2 2 4-4" />
    </g>
    <defs>
      <clipPath id="map-check-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapCheckIcon;
