import * as React from "react";
import type { SVGProps } from "react";
const SvgRunIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#run-icon_svg__a)"
    >
      <path d="M12 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4 17l5 1 .75-1.5M15 21v-4l-4-3 1-6" />
      <path d="M7 12V9l5-1 3 3 3 1" />
    </g>
    <defs>
      <clipPath id="run-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRunIcon;
