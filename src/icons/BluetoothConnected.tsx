import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetoothConnected = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bluetooth-connected_svg__a)"
    >
      <path d="m7 8 10 8-5 4V4l5 4-10 8M4 12h1M18 12h1" />
    </g>
    <defs>
      <clipPath id="bluetooth-connected_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBluetoothConnected;
