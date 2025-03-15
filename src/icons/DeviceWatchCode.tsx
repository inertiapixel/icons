import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceWatchCode = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#device-watch-code_svg__a)"
    >
      <path d="M11 18H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M20 21l2-2-2-2M17 17l-2 2 2 2M9 18v3h3M9 6V3h6v3" />
    </g>
    <defs>
      <clipPath id="device-watch-code_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceWatchCode;
