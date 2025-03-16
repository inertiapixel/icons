import * as React from "react";
import type { SVGProps } from "react";
const SvgUserSquareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#user-square-icon_svg__a)"
    >
      <path d="M9 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0M6 21v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
      <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </g>
    <defs>
      <clipPath id="user-square-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserSquareIcon;
