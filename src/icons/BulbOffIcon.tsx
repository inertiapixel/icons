import * as React from "react";
import type { SVGProps } from "react";
const SvgBulbOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bulb-off-icon_svg__a)"
    >
      <path d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7-.7.7M11.09 7.084a5 5 0 0 1 5.826 5.84m-1.379 2.61a5 5 0 0 1-.537.467 3.5 3.5 0 0 0-1 3 2 2 0 0 1-4 0 3.5 3.5 0 0 0-1-3 5 5 0 0 1-.527-7.544M9.7 17h4.6M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="bulb-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBulbOffIcon;
