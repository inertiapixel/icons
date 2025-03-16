import * as React from "react";
import type { SVGProps } from "react";
const SvgCircuitDiodeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#circuit-diode-icon_svg__a)"
    >
      <path d="M22 12h-6M2 12h6M8 7l8 5-8 5zM16 7v10" />
    </g>
    <defs>
      <clipPath id="circuit-diode-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircuitDiodeIcon;
