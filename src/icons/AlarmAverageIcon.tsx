import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmAverageIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#alarm-average-icon_svg__a)"
    >
      <path d="M5 13a7 7 0 1 0 14 0 7 7 0 0 0-14 0M7 4 4.25 6M17 4l2.75 2" />
      <path d="M8 13h1l2 3 2-6 2 3h1" />
    </g>
    <defs>
      <clipPath id="alarm-average-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlarmAverageIcon;
