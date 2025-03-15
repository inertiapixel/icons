import * as React from "react";
import type { SVGProps } from "react";
const SvgResize = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#resize_svg__a)"
    >
      <path d="M4 11v8a1 1 0 0 0 1 1h8M4 6V5a1 1 0 0 1 1-1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1-1 1h-1" />
      <path d="M4 12h7a1 1 0 0 1 1 1v7" />
    </g>
    <defs>
      <clipPath id="resize_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgResize;
