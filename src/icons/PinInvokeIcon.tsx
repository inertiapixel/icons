import * as React from "react";
import type { SVGProps } from "react";
const SvgPinInvokeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pin-invoke-icon_svg__a)"
    >
      <path d="M21 13v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9M17 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M10 11h4v4M10 15l4-4" />
    </g>
    <defs>
      <clipPath id="pin-invoke-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPinInvokeIcon;
