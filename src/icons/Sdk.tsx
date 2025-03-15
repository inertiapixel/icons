import * as React from "react";
import type { SVGProps } from "react";
const SvgSdk = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sdk_svg__a)"
    >
      <path d="M7 8H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3M17 8v8M21 8l-3 4 3 4M17 12h1M10 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z" />
    </g>
    <defs>
      <clipPath id="sdk_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSdk;
