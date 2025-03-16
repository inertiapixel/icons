import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneybagIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#moneybag-icon_svg__a)"
    >
      <path d="M9.5 3h5A1.5 1.5 0 0 1 16 4.5 3.5 3.5 0 0 1 12.5 8h-1A3.5 3.5 0 0 1 8 4.5 1.5 1.5 0 0 1 9.5 3" />
      <path d="M4 17v-1a8 8 0 0 1 16 0v1a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4" />
    </g>
    <defs>
      <clipPath id="moneybag-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoneybagIcon;
