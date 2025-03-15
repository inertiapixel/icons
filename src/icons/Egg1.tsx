import * as React from "react";
import type { SVGProps } from "react";
const SvgEgg1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#egg-1_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14.083c0 4.154-2.966 6.74-7 6.917-4.2 0-7-2.763-7-6.917C5 8.545 8.5 2.993 12 3s7 5.545 7 11.083"
      />
    </g>
    <defs>
      <clipPath id="egg-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEgg1;
