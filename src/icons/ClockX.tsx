import * as React from "react";
import type { SVGProps } from "react";
const SvgClockX = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clock-x_svg__a)"
    >
      <path d="M20.926 13.15a9 9 0 1 0-7.835 7.784" />
      <path d="M12 7v5l2 2M22 22l-5-5M17 22l5-5" />
    </g>
    <defs>
      <clipPath id="clock-x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockX;
