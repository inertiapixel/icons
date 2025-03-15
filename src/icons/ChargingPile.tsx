import * as React from "react";
import type { SVGProps } from "react";
const SvgChargingPile = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#charging-pile_svg__a)"
    >
      <path d="m18 7-1 1M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 1 0 3 0V9l-3-3M4 20V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14" />
      <path d="M9 11.5 7.5 14h3L9 16.5M3 20h12M4 8h10" />
    </g>
    <defs>
      <clipPath id="charging-pile_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChargingPile;
