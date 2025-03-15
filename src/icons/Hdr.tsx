import * as React from "react";
import type { SVGProps } from "react";
const SvgHdr = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hdr_svg__a)"
    >
      <path d="M3 16V8M7 8v8M3 12h4M10 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM17 12h2a2 2 0 0 0 0-4h-2v8m4 0-3-4" />
    </g>
    <defs>
      <clipPath id="hdr_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHdr;
