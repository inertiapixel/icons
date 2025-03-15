import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceWatchStats = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#device-watch-stats_svg__a)"
    >
      <path d="M6 9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zM9 18v3h6v-3M9 6V3h6v3M9 14v-4M12 14v-1M15 14v-3" />
    </g>
    <defs>
      <clipPath id="device-watch-stats_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceWatchStats;
