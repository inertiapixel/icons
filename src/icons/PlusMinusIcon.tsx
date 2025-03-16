import * as React from "react";
import type { SVGProps } from "react";
const SvgPlusMinusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#plus-minus-icon_svg__a)"
    >
      <path d="M4 7h6M7 4v6M20 18h-6M5 19 19 5" />
    </g>
    <defs>
      <clipPath id="plus-minus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlusMinusIcon;
