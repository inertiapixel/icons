import * as React from "react";
import type { SVGProps } from "react";
const SvgBroadcast = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#broadcast_svg__a)"
    >
      <path d="M18.364 19.364a9 9 0 1 0-12.728 0" />
      <path d="M15.536 16.535a5 5 0 1 0-7.072 0" />
      <path d="M11 13a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </g>
    <defs>
      <clipPath id="broadcast_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBroadcast;
