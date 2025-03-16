import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartCancelIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#heart-cancel-icon_svg__a)"
    >
      <path d="m12.001 20-7.5-7.428a5 5 0 1 1 7.5-6.566 5 5 0 1 1 7.993 6.01M16 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0M17 21l4-4" />
    </g>
    <defs>
      <clipPath id="heart-cancel-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartCancelIcon;
