import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrentLocationIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#current-location-icon_svg__a)"
    >
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0M12 2v2M12 20v2M20 12h2M2 12h2" />
    </g>
    <defs>
      <clipPath id="current-location-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrentLocationIcon;
