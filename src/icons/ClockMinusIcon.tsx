import * as React from "react";
import type { SVGProps } from "react";
const SvgClockMinusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clock-minus-icon_svg__a)"
    >
      <path d="M20.477 15.022a9 9 0 1 0-7.998 5.965" />
      <path d="M12 7v5l3 3M16 19h6" />
    </g>
    <defs>
      <clipPath id="clock-minus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockMinusIcon;
