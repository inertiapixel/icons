import * as React from "react";
import type { SVGProps } from "react";
const SvgTimeDurationOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#time-duration-off_svg__a)"
    >
      <path d="M3 12v.01M7.5 19.8v.01M4.2 16.5v.01M4.2 7.5v.01M12 21a9 9 0 0 0 6.362-2.634m1.685-2.336A9 9 0 0 0 12 3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="time-duration-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTimeDurationOff;
