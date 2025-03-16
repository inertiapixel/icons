import * as React from "react";
import type { SVGProps } from "react";
const SvgCommandIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#command-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 9a2 2 0 1 1 2-2v10a2 2 0 1 1-2-2h10a2 2 0 1 1-2 2V7a2 2 0 1 1 2 2z"
      />
    </g>
    <defs>
      <clipPath id="command-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCommandIcon;
