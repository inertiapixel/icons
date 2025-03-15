import * as React from "react";
import type { SVGProps } from "react";
const SvgUvIndex = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#uv-index_svg__a)"
    >
      <path d="M3 12.002h1m16 0h1m-15.4-6.4.7.7m12.1-.7-.7.7m-9.7 5.7a4 4 0 1 1 8 0M12 4V3M13 16l2 5h1l2-5M6 16v3a2 2 0 0 0 4 0v-3" />
    </g>
    <defs>
      <clipPath id="uv-index_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUvIndex;
