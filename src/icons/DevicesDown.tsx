import * as React from "react";
import type { SVGProps } from "react";
const SvgDevicesDown = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#devices-down_svg__a)"
    >
      <path d="M13 16.5V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3.5" />
      <path d="M18 8V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8M19 16v6M22 19l-3 3-3-3M16 9h2" />
    </g>
    <defs>
      <clipPath id="devices-down_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDevicesDown;
