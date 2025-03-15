import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceSim = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#device-sim_svg__a)"
    >
      <path d="M6 3h8.5L19 7.5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" />
      <path d="M9 11h3v6M15 17v.01M15 14v.01M15 11v.01M9 14v.01M9 17v.01" />
    </g>
    <defs>
      <clipPath id="device-sim_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceSim;
