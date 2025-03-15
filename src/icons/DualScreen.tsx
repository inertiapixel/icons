import * as React from "react";
import type { SVGProps } from "react";
const SvgDualScreen = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#dual-screen_svg__a)"
    >
      <path d="m5 4 8 3v15l-8-3z" />
      <path d="M13 19h6V4H5" />
    </g>
    <defs>
      <clipPath id="dual-screen_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDualScreen;
