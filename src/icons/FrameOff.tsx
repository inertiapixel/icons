import * as React from "react";
import type { SVGProps } from "react";
const SvgFrameOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#frame-off_svg__a)"
    >
      <path d="M4 7h3m4 0h9M4 17h13M7 7v13M17 4v9m0 4v3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="frame-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFrameOff;
