import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceAirpods = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#device-airpods_svg__a)"
    >
      <path d="M6 4a4 4 0 0 1 4 3.8v10.7a1.5 1.5 0 0 1-3 0V12H6a4 4 0 0 1-4-3.8V8a4 4 0 0 1 4-4M18 4a4 4 0 0 0-4 3.8v10.7a1.5 1.5 0 1 0 3 0V12h1a4 4 0 0 0 4-3.8V8a4 4 0 0 0-4-4" />
    </g>
    <defs>
      <clipPath id="device-airpods_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceAirpods;
