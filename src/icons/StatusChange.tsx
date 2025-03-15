import * as React from "react";
import type { SVGProps } from "react";
const SvgStatusChange = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#status-change_svg__a)"
    >
      <path d="M4 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0M16 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 12v-2a6 6 0 1 1 12 0v2" />
      <path d="m15 9 3 3 3-3" />
    </g>
    <defs>
      <clipPath id="status-change_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStatusChange;
