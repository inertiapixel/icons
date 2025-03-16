import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceCctvIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#device-cctv-icon_svg__a)"
    >
      <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM8 14a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
      <path d="M19 7v7a7 7 0 1 1-14 0V7M12 14h.01" />
    </g>
    <defs>
      <clipPath id="device-cctv-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceCctvIcon;
