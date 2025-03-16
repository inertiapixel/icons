import * as React from "react";
import type { SVGProps } from "react";
const SvgKerningIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#kerning-icon_svg__a)"
    >
      <path d="M16 15v-3.5a2.5 2.5 0 0 1 5 0V15m0-2h-5M3 9l3 6 3-6M9 20l6-16" />
    </g>
    <defs>
      <clipPath id="kerning-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKerningIcon;
