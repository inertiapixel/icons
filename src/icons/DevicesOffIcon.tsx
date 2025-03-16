import * as React from "react";
import type { SVGProps } from "react";
const SvgDevicesOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#devices-off-icon_svg__a)"
    >
      <path d="M13 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8m-1 3h-6a1 1 0 0 1-1-1v-6M18 8V5a1 1 0 0 0-1-1H8M4 4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9M16 9h2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="devices-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDevicesOffIcon;
