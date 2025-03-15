import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceIpad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#device-ipad_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 2a3 3 0 0 1 2.995 2.824L21 5v14a3 3 0 0 1-2.824 2.995L18 22H6a3 3 0 0 1-2.995-2.824L3 19V5a3 3 0 0 1 2.824-2.995L6 2zm-3 15H9l-.117.007a1 1 0 0 0 0 1.986L9 19h6l.117-.007a1 1 0 0 0 0-1.986z"
      />
    </g>
    <defs>
      <clipPath id="device-ipad_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceIpad;
