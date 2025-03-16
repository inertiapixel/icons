import * as React from "react";
import type { SVGProps } from "react";
const SvgCastIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cast-icon_svg__a)"
    >
      <path d="M3 19h.01M7 19a4 4 0 0 0-4-4M11 19a8 8 0 0 0-8-8" />
      <path d="M15 19h3a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-2.8 2" />
    </g>
    <defs>
      <clipPath id="cast-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCastIcon;
