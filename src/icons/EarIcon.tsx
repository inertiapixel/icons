import * as React from "react";
import type { SVGProps } from "react";
const SvgEarIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ear-icon_svg__a)"
    >
      <path d="M6 10.002a7 7 0 1 1 13 3.6 10 10 0 0 1-2 2 8 8 0 0 0-2 3 4.5 4.5 0 0 1-6.8 1.4" />
      <path d="M10 10a3 3 0 1 1 5 2.2" />
    </g>
    <defs>
      <clipPath id="ear-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEarIcon;
