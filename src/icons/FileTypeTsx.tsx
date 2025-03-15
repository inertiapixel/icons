import * as React from "react";
import type { SVGProps } from "react";
const SvgFileTypeTsx = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-type-tsx_svg__a)"
    >
      <path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4M16 15l4 6M16 21l4-6M10 20.25c0 .414.336.75.75.75H12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75M4.5 15h3M6 15v6" />
    </g>
    <defs>
      <clipPath id="file-type-tsx_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileTypeTsx;
