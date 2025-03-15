import * as React from "react";
import type { SVGProps } from "react";
const SvgCircuitCapacitor = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#circuit-capacitor_svg__a)"
    >
      <path d="M22 12h-8M2 12h8M10 7v10M14 7v10" />
    </g>
    <defs>
      <clipPath id="circuit-capacitor_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircuitCapacitor;
