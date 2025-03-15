import * as React from "react";
import type { SVGProps } from "react";
const SvgGavel = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#gavel_svg__a)"
    >
      <path d="m13 10 7.383 7.418c.823.82.823 2.148 0 2.967a2.11 2.11 0 0 1-2.976 0L10 13M6 9l4 4M13 10 9 6M3 21h7" />
      <path d="m6.793 15.793-3.586-3.586a1 1 0 0 1 0-1.414L5.5 8.5 6 9l3-3-.5-.5 2.293-2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414L13.5 10.5 13 10l-3 3 .5.5-2.293 2.293a1 1 0 0 1-1.414 0" />
    </g>
    <defs>
      <clipPath id="gavel_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGavel;
