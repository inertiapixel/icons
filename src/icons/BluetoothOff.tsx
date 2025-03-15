import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetoothOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bluetooth-off_svg__a)"
    >
      <path d="m3 3 18 18M16.44 16.45 12.002 20v-8m0-4V4l5 4-2.776 2.22m-2.222 1.779-5 4" />
    </g>
    <defs>
      <clipPath id="bluetooth-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBluetoothOff;
