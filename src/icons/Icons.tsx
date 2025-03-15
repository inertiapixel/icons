import * as React from "react";
import type { SVGProps } from "react";
const SvgIcons = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#icons_svg__a)"
    >
      <path d="M3 6.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0M2.5 21h8l-4-7zM14 3l7 7M14 10l7-7M14 14h7v7h-7z" />
    </g>
    <defs>
      <clipPath id="icons_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcons;
