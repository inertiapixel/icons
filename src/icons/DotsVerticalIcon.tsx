import * as React from "react";
import type { SVGProps } from "react";
const SvgDotsVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#dots-vertical-icon_svg__a)"
    >
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </g>
    <defs>
      <clipPath id="dots-vertical-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDotsVerticalIcon;
