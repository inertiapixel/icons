import * as React from "react";
import type { SVGProps } from "react";
const SvgRotateClockwise = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#rotate-clockwise_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5"
      />
    </g>
    <defs>
      <clipPath id="rotate-clockwise_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRotateClockwise;
