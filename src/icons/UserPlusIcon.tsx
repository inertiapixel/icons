import * as React from "react";
import type { SVGProps } from "react";
const SvgUserPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#user-plus-icon_svg__a)"
    >
      <path d="M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M16 19h6M19 16v6M6 21v-2a4 4 0 0 1 4-4h4" />
    </g>
    <defs>
      <clipPath id="user-plus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserPlusIcon;
