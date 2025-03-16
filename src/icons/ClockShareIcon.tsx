import * as React from "react";
import type { SVGProps } from "react";
const SvgClockShareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clock-share-icon_svg__a)"
    >
      <path d="M20.943 13.016A9 9 0 1 0 12.026 21M16 22l5-5M21 21.5V17h-4.5" />
      <path d="M12 7v5l2 2" />
    </g>
    <defs>
      <clipPath id="clock-share-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockShareIcon;
