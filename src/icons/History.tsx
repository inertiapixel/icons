import * as React from "react";
import type { SVGProps } from "react";
const SvgHistory = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#history_svg__a)"
    >
      <path d="M12 8v4l2 2" />
      <path d="M3.05 10.998a9 9 0 1 1 .5 4m-.5 5v-5h5" />
    </g>
    <defs>
      <clipPath id="history_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHistory;
