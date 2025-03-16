import * as React from "react";
import type { SVGProps } from "react";
const SvgDisabledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#disabled-icon_svg__a)"
    >
      <path d="M9 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M11 7v8h4l4 5M11 11h5M7.001 11.5a5 5 0 1 0 6 7.5" />
    </g>
    <defs>
      <clipPath id="disabled-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDisabledIcon;
