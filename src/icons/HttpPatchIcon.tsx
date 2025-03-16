import * as React from "react";
import type { SVGProps } from "react";
const SvgHttpPatchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#http-patch-icon_svg__a)"
    >
      <path d="M3 12h2a2 2 0 1 0 0-4H3v8M10 16v-6a2 2 0 1 1 4 0v6M10 13h4M17 8h4M19 8v8" />
    </g>
    <defs>
      <clipPath id="http-patch-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHttpPatchIcon;
