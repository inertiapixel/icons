import * as React from "react";
import type { SVGProps } from "react";
const SvgClockCheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clock-check-icon_svg__a)"
    >
      <path d="M20.942 13.021a9 9 0 1 0-9.407 7.967" />
      <path d="M12 7v5l3 3M15 19l2 2 4-4" />
    </g>
    <defs>
      <clipPath id="clock-check-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockCheckIcon;
