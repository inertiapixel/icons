import * as React from "react";
import type { SVGProps } from "react";
const SvgClockOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clock-off_svg__a)"
    >
      <path d="M5.633 5.64a9 9 0 1 0 12.735 12.72m1.674-2.32A9 9 0 0 0 7.96 3.956M12 7v1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="clock-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockOff;
