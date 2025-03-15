import * as React from "react";
import type { SVGProps } from "react";
const SvgClockUp = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clock-up_svg__a)"
    >
      <path d="M20.983 12.548a9 9 0 1 0-8.45 8.436M19 22v-6M22 19l-3-3-3 3" />
      <path d="M12 7v5l2.5 2.5" />
    </g>
    <defs>
      <clipPath id="clock-up_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockUp;
