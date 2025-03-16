import * as React from "react";
import type { SVGProps } from "react";
const SvgPageBreakIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#page-break-icon_svg__a)"
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4M19 18v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1M3 14h3m4.5 0h3m4.5 0h3" />
      <path d="M5 10V5a2 2 0 0 1 2-2h7l5 5v2" />
    </g>
    <defs>
      <clipPath id="page-break-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPageBreakIcon;
