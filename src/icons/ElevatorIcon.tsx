import * as React from "react";
import type { SVGProps } from "react";
const SvgElevatorIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#elevator-icon_svg__a)"
    >
      <path d="M5 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="m10 10 2-2 2 2M10 14l2 2 2-2" />
    </g>
    <defs>
      <clipPath id="elevator-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgElevatorIcon;
