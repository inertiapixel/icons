import * as React from "react";
import type { SVGProps } from "react";
const SvgMapRoute = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#map-route_svg__a)"
    >
      <path d="m3 7 6-3 6 3 6-3v13l-6 3-6-3-6 3zM9 12v.01M6 13v.01M17 15l-4-4M13 15l4-4" />
    </g>
    <defs>
      <clipPath id="map-route_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapRoute;
