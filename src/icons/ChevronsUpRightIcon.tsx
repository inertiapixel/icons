import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronsUpRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chevrons-up-right-icon_svg__a)"
    >
      <path d="M9 7h8v8M5 11h8v8" />
    </g>
    <defs>
      <clipPath id="chevrons-up-right-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChevronsUpRightIcon;
