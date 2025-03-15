import * as React from "react";
import type { SVGProps } from "react";
const SvgElevatorOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#elevator-off_svg__a)"
    >
      <path d="M8 4h10a1 1 0 0 1 1 1v10m0 4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5M12 8l2 2" />
      <path d="m10 14 2 2 2-2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="elevator-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgElevatorOff;
