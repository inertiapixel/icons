import * as React from "react";
import type { SVGProps } from "react";
const SvgWritingOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#writing-off_svg__a)"
    >
      <path d="M16 7h4M16 16v1l2 2 .5-.5M20 16V5c0-1.121-.879-2-2-2s-2 .879-2 2v7M18 19H5a2 2 0 1 1 0-4h4a2 2 0 1 0 0-4H6M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="writing-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWritingOff;
