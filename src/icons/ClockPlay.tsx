import * as React from "react";
import type { SVGProps } from "react";
const SvgClockPlay = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clock-play_svg__a)"
    >
      <path d="M12 7v5l2 2M17 22l5-3-5-3z" />
      <path d="M13.016 20.942a9 9 0 1 1 7.831-7.292" />
    </g>
    <defs>
      <clipPath id="clock-play_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockPlay;
