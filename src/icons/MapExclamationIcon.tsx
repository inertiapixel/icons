import * as React from "react";
import type { SVGProps } from "react";
const SvgMapExclamationIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#map-exclamation-icon_svg__a)"
    >
      <path d="m15 20-6-3-6 3V7l6-3 6 3 6-3v8.5M9 4v13M15 7v13M19 16v3M19 22v.01" />
    </g>
    <defs>
      <clipPath id="map-exclamation-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapExclamationIcon;
