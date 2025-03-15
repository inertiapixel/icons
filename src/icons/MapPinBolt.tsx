import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPinBolt = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#map-pin-bolt_svg__a)"
    >
      <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 13.59-4.63M19 16l-2 3h4l-2 3" />
    </g>
    <defs>
      <clipPath id="map-pin-bolt_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapPinBolt;
