import * as React from "react";
import type { SVGProps } from "react";
const SvgFileIsr = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-isr_svg__a)"
    >
      <path d="M15 3v4a1 1 0 0 0 1 1h4" />
      <path d="M15 3v4a1 1 0 0 0 1 1h4" />
      <path d="M6 8V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7" />
      <path d="m3 15 3-3 3 3" />
    </g>
    <defs>
      <clipPath id="file-isr_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileIsr;
