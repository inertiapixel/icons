import * as React from "react";
import type { SVGProps } from "react";
const SvgRollercoasterOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#rollercoaster-off_svg__a)"
    >
      <path d="M3 21a5.55 5.55 0 0 0 5.265-3.795L9 15a8.76 8.76 0 0 1 2.35-3.652m2.403-1.589A8.8 8.8 0 0 1 17.325 9H21M20 9v7m0 4v1M8 21v-3M12 21v-9M16 9.5V12m0 4v5M15 3h5v3h-5zM9.446 5.415 10 5l2 2.5-.285.213M9.447 9.415 8 10.5 6.2 10 6 8l1.139-.854M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="rollercoaster-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRollercoasterOff;
