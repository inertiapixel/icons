import * as React from "react";
import type { SVGProps } from "react";
const SvgSteeringWheelOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#steering-wheel-off_svg__a)"
    >
      <path d="M20.039 16.047A9 9 0 0 0 7.954 3.957m-2.32 1.678a9 9 0 1 0 12.737 12.719" />
      <path d="M10.594 10.574a2 2 0 1 0 2.827 2.83M12 14v7M10 12l-6.75-2M15.543 11.543 20.751 10M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="steering-wheel-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSteeringWheelOff;
