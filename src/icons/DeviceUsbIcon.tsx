import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceUsbIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#device-usb-icon_svg__a)"
    >
      <path d="M8 8h8v9a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3zM10 8V4h4v4" />
    </g>
    <defs>
      <clipPath id="device-usb-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceUsbIcon;
