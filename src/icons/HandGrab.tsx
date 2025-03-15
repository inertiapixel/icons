import * as React from "react";
import type { SVGProps } from "react";
const SvgHandGrab = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hand-grab_svg__a)"
    >
      <path d="M8 11V7.5a1.5 1.5 0 0 1 3 0V10M11 9.5v-3a1.5 1.5 0 1 1 3 0V10M14 7.5a1.5 1.5 0 1 1 3 0V10" />
      <path d="M16.998 9.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-2 .208a6 6 0 0 1-5.012-2.7l-.196-.3q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022 1.87 1.87 0 0 1 2.28.28L7.998 11" />
    </g>
    <defs>
      <clipPath id="hand-grab_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHandGrab;
