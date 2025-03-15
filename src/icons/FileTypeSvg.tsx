import * as React from "react";
import type { SVGProps } from "react";
const SvgFileTypeSvg = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-type-svg_svg__a)"
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M4 20.25c0 .414.336.75.75.75H6a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75M10 15l2 6 2-6M20 15h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v-3" />
    </g>
    <defs>
      <clipPath id="file-type-svg_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileTypeSvg;
