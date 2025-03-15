import * as React from "react";
import type { SVGProps } from "react";
const SvgSignalH = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#signal-h_svg__a)"
    >
      <path d="M10 16V8M14 8v8M10 12h4" />
    </g>
    <defs>
      <clipPath id="signal-h_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSignalH;
