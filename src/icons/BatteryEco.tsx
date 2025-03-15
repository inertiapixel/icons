import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryEco = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#battery-eco_svg__a)"
    >
      <path d="M4 9a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v.5a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v.5a2 2 0 0 1-2 2h-5.5" />
      <path d="M3 16.143C3 13.303 5.09 11 7.667 11H10v.857C10 14.697 7.91 17 5.333 17H3zM3 20v-3" />
    </g>
    <defs>
      <clipPath id="battery-eco_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBatteryEco;
