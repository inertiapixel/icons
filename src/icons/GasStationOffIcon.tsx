import * as React from "react";
import type { SVGProps } from "react";
const SvgGasStationOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#gas-station-off-icon_svg__a)"
    >
      <path d="M15 11a2 2 0 0 1 2 2m3 3V9l-3-3M4 20V6c0-.548.22-1.044.577-1.405M8 4h4a2 2 0 0 1 2 2v4m0 4v6M3 20h12" />
      <path d="M18 7v1a1 1 0 0 0 1 1h1M4 11h7M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="gas-station-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGasStationOffIcon;
