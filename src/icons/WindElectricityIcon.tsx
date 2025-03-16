import * as React from "react";
import type { SVGProps } from "react";
const SvgWindElectricityIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wind-electricity-icon_svg__a)"
    >
      <path d="m20 7-3 5h4l-3 5M3 16h4a2 2 0 1 1 0 4M3 12h8a2 2 0 0 0 0-4M3 8h3a2 2 0 1 0 0-4" />
    </g>
    <defs>
      <clipPath id="wind-electricity-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWindElectricityIcon;
