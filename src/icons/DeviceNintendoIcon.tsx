import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceNintendoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#device-nintendo-icon_svg__a)"
    >
      <path d="M10 20V4H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4zM14 20V4h3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4z" />
      <path
        fill="currentColor"
        d="M17.5 16.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </g>
    <defs>
      <clipPath id="device-nintendo-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceNintendoIcon;
