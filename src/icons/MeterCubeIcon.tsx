import * as React from "react";
import type { SVGProps } from "react";
const SvgMeterCubeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#meter-cube-icon_svg__a)"
    >
      <path d="M17 5h1.5a1.5 1.5 0 0 1 0 3m0 0H18m.5 0a1.5 1.5 0 0 1 0 3H17M4 12v6M4 14a2 2 0 0 1 2-2h.5A2.5 2.5 0 0 1 9 14.5V18M9 15.5v-1a2.5 2.5 0 0 1 5 0V18" />
    </g>
    <defs>
      <clipPath id="meter-cube-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMeterCubeIcon;
