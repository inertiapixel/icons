import * as React from "react";
import type { SVGProps } from "react";
const SvgSpyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#spy-icon_svg__a)"
    >
      <path d="M3 11h18M5 11V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4M4 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M14 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M10 17h4" />
    </g>
    <defs>
      <clipPath id="spy-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpyIcon;
