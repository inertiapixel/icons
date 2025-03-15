import * as React from "react";
import type { SVGProps } from "react";
const SvgRouteScan = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#route-scan_svg__a)"
    >
      <path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2M7 12V9h3M14 9h3v3" />
      <path d="m7 9 4.414 4.414A2 2 0 0 1 12 14.828V17M17 9l-4.414 4.414A2 2 0 0 0 12 14.828V17" />
    </g>
    <defs>
      <clipPath id="route-scan_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRouteScan;
