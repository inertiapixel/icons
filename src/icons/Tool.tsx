import * as React from "react";
import type { SVGProps } from "react";
const SvgTool = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#tool_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 10h3V7L6.5 3.5a6 6 0 0 1 8 8l6 6a2.121 2.121 0 1 1-3 3l-6-6a6 6 0 0 1-8-8z"
      />
    </g>
    <defs>
      <clipPath id="tool_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTool;
