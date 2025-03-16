import * as React from "react";
import type { SVGProps } from "react";
const SvgCastOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cast-off-icon_svg__a)"
    >
      <path d="M3 19h.01M7 19a4 4 0 0 0-4-4M11 19a8 8 0 0 0-8-8M15 19.002h3q.447 0 .875-.13m2-2a3 3 0 0 0 .128-.868v-8a3 3 0 0 0-3-3h-9m-3.865.136a3 3 0 0 0-1.935 1.864M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="cast-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCastOffIcon;
