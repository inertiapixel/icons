import * as React from "react";
import type { SVGProps } from "react";
const SvgCurlyLoopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#curly-loop-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 8c-4 0-7 2-7 5a3 3 0 0 0 6 0c0-3-2.5-5-8-5s-8 2-8 5a3 3 0 0 0 6 0c0-3-3-5-7-5"
      />
    </g>
    <defs>
      <clipPath id="curly-loop-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurlyLoopIcon;
