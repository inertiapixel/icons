import * as React from "react";
import type { SVGProps } from "react";
const SvgSignalHPlus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#signal-h-plus_svg__a)"
    >
      <path d="M7 16V8M11 8v8M7 12h4M14 12h4M16 10v4" />
    </g>
    <defs>
      <clipPath id="signal-h-plus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSignalHPlus;
