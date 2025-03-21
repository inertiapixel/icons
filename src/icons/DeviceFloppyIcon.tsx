import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceFloppyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#device-floppy-icon_svg__a)"
    >
      <path d="M6 4h10l4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
      <path d="M10 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0M14 4v4H8V4" />
    </g>
    <defs>
      <clipPath id="device-floppy-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceFloppyIcon;
