import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPinSearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#map-pin-search-icon_svg__a)"
    >
      <path d="M14.916 11.707A3 3 0 1 0 11.999 14" />
      <path d="M11.991 21.485a2 2 0 0 1-1.404-.585l-4.244-4.243a8 8 0 1 1 13.651-5.351" />
      <path d="M15 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0M20.2 20.2 22 22" />
    </g>
    <defs>
      <clipPath id="map-pin-search-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapPinSearchIcon;
