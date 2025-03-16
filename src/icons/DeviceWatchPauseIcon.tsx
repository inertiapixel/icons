import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceWatchPauseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#device-watch-pause-icon_svg__a)"
    >
      <path d="M13 18H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M9 18v3h4M9 6V3h6v3M17 17v5M21 17v5" />
    </g>
    <defs>
      <clipPath id="device-watch-pause-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceWatchPauseIcon;
