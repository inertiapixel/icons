import * as React from "react";
import type { SVGProps } from "react";
const SvgDeerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#deer-icon_svg__a)"
    >
      <path d="M3 3c0 2 1 3 4 3q3 0 3 3M21 3c0 2-1 3-4 3-2 0-3 .333-3 3M12 18c-1 0-4-3-4-6q0-3 4-3t4 3c0 3-3 6-4 6" />
      <path d="m15.185 14.89.095-.18a4 4 0 1 1-6.56 0M17 3q0 2-1 3M7 3q0 2 1 3M7 6Q3 7 2 9M17 6q4 1 5 3M8.5 10 7 9M15.5 10 17 9M12 15h.01" />
    </g>
    <defs>
      <clipPath id="deer-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeerIcon;
