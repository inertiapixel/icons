import * as React from "react";
import type { SVGProps } from "react";
const SvgSumOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sum-off-icon_svg__a)"
    >
      <path d="M18 18a1 1 0 0 1-1 1H6l6-7M9 5h8a1 1 0 0 1 1 1v2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="sum-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSumOffIcon;
