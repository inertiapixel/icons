import * as React from "react";
import type { SVGProps } from "react";
const SvgOverlineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#overline-icon_svg__a)"
    >
      <path d="M7 9v5a5 5 0 1 0 10 0V9M5 5h14" />
    </g>
    <defs>
      <clipPath id="overline-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOverlineIcon;
