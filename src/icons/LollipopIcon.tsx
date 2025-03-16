import * as React from "react";
import type { SVGProps } from "react";
const SvgLollipopIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#lollipop-icon_svg__a)"
    >
      <path d="M7 10a7 7 0 1 0 14 0 7 7 0 0 0-14 0" />
      <path d="M21 10a3.5 3.5 0 1 0-7 0M14 10a3.5 3.5 0 1 1-7 0M14 17a3.5 3.5 0 1 0 0-7M14 3a3.5 3.5 0 1 0 0 7M3 21l6-6" />
    </g>
    <defs>
      <clipPath id="lollipop-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLollipopIcon;
