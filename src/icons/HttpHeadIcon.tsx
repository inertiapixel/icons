import * as React from "react";
import type { SVGProps } from "react";
const SvgHttpHeadIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#http-head-icon_svg__a)"
    >
      <path d="M3 16V8M7 8v8M3 12h4M14 8h-4v8h4M10 12h2.5M17 16v-6a2 2 0 1 1 4 0v6M17 13h4" />
    </g>
    <defs>
      <clipPath id="http-head-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHttpHeadIcon;
