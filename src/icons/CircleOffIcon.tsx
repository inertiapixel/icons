import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#circle-off-icon_svg__a)"
    >
      <path d="M20.044 16.046A9 9 0 0 0 7.957 3.959M5.639 5.636a9 9 0 1 0 12.724 12.73M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="circle-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircleOffIcon;
