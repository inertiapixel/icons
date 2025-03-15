import * as React from "react";
import type { SVGProps } from "react";
const SvgFileOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-off_svg__a)"
    >
      <path d="m3 3 18 18M7 3h7l5 5v7m0 4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5" />
    </g>
    <defs>
      <clipPath id="file-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileOff;
