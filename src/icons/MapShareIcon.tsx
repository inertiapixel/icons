import * as React from "react";
import type { SVGProps } from "react";
const SvgMapShareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#map-share-icon_svg__a)"
    >
      <path d="m13 19-4-2-6 3V7l6-3 6 3 6-3v9M9 4v13M15 7v6.5M16 22l5-5M21 21.5V17h-4.5" />
    </g>
    <defs>
      <clipPath id="map-share-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapShareIcon;
