import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceWatchOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#device-watch-off_svg__a)"
    >
      <path d="M10 6h5a3 3 0 0 1 3 3v5m-.89 3.132A3 3 0 0 1 15 18H9a3 3 0 0 1-3-3V9c0-.817.327-1.559.857-2.1M9 18v3h6v-3M9 5V3h6v3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="device-watch-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceWatchOff;
