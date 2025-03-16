import * as React from "react";
import type { SVGProps } from "react";
const SvgCrossOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cross-off-icon_svg__a)"
    >
      <path d="M16 12h3V8h-5V3h-4v3M8 8H5v4h5v9h4v-7M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="cross-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCrossOffIcon;
