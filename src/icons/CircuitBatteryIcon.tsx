import * as React from "react";
import type { SVGProps } from "react";
const SvgCircuitBatteryIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#circuit-battery-icon_svg__a)"
    >
      <path d="M2 12h4M18 12h4M18 5v14M14 9v6M10 5v14M6 9v6" />
    </g>
    <defs>
      <clipPath id="circuit-battery-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircuitBatteryIcon;
