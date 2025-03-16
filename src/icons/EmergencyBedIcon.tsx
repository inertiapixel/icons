import * as React from "react";
import type { SVGProps } from "react";
const SvgEmergencyBedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#emergency-bed-icon_svg__a)"
    >
      <path d="M14 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0M4 8l2.1 2.8A3 3 0 0 0 8.5 12H20M10 6h4M12 4v4" />
      <path d="M12 12v2l-2.5 2.5M14.5 16.5 12 14" />
    </g>
    <defs>
      <clipPath id="emergency-bed-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEmergencyBedIcon;
