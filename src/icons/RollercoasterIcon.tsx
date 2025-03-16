import * as React from "react";
import type { SVGProps } from "react";
const SvgRollercoasterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#rollercoaster-icon_svg__a)"
    >
      <path d="M3 21a5.55 5.55 0 0 0 5.265-3.795L9 15a8.78 8.78 0 0 1 8.325-6H21M20 9v12M8 21v-3M12 21V11M16 9.5V21M15 3h5v3h-5zM6 8l4-3 2 2.5-4 3-1.8-.5z" />
    </g>
    <defs>
      <clipPath id="rollercoaster-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRollercoasterIcon;
