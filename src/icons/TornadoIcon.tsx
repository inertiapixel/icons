import * as React from "react";
import type { SVGProps } from "react";
const SvgTornadoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#tornado-icon_svg__a)"
    >
      <path d="M21 4H3M13 16H7M11 20h4M6 8h14M4 12h12" />
    </g>
    <defs>
      <clipPath id="tornado-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTornadoIcon;
