import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationPinIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#location-pin-icon_svg__a)"
    >
      <path d="m12 18-2-4-7-3.5a.55.55 0 0 1 0-1L21 3l-2.9 8.034M21.121 20.122a3 3 0 1 0-4.242 0Q17.506 20.75 19 22q1.577-1.334 2.121-1.88M19 18v.01" />
    </g>
    <defs>
      <clipPath id="location-pin-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLocationPinIcon;
