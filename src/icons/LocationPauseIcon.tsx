import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationPauseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#location-pause-icon_svg__a)"
    >
      <path d="M13.02 20.04 10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.633 10.062M17 17v5M21 17v5" />
    </g>
    <defs>
      <clipPath id="location-pause-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLocationPauseIcon;
