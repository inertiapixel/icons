import * as React from "react";
import type { SVGProps } from "react";
const SvgWindsockIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#windsock-icon_svg__a)"
    >
      <path d="M6 3v18M6 11l12-1V6L6 5M10 5.5v5M14 6v4M4 21h4" />
    </g>
    <defs>
      <clipPath id="windsock-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWindsockIcon;
