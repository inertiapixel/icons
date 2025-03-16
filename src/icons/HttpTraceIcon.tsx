import * as React from "react";
import type { SVGProps } from "react";
const SvgHttpTraceIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#http-trace-icon_svg__a)"
    >
      <path d="M3 8h4M5 8v8M10 12h2a2 2 0 0 0 0-4h-2v8m4 0-3-4M17 16v-6a2 2 0 1 1 4 0v6M17 13h4" />
    </g>
    <defs>
      <clipPath id="http-trace-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHttpTraceIcon;
