import * as React from "react";
import type { SVGProps } from "react";
const SvgCursorTextIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cursor-text-icon_svg__a)"
    >
      <path d="M10 12h4M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3M15 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3" />
    </g>
    <defs>
      <clipPath id="cursor-text-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCursorTextIcon;
