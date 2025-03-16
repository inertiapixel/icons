import * as React from "react";
import type { SVGProps } from "react";
const SvgClockStopIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clock-stop-icon_svg__a)"
    >
      <path d="M21 12a9 9 0 1 0-9 9" />
      <path d="M12 7v5l1 1M16 16h6v6h-6z" />
    </g>
    <defs>
      <clipPath id="clock-stop-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockStopIcon;
