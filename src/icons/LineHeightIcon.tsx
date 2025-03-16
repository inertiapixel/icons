import * as React from "react";
import type { SVGProps } from "react";
const SvgLineHeightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#line-height-icon_svg__a)"
    >
      <path d="m3 8 3-3 3 3M3 16l3 3 3-3M6 5v14M13 6h7M13 12h7M13 18h7" />
    </g>
    <defs>
      <clipPath id="line-height-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLineHeightIcon;
