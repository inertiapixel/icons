import * as React from "react";
import type { SVGProps } from "react";
const SvgBackpackOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#backpack-off_svg__a)"
    >
      <path d="M10 6h3a6 6 0 0 1 6 6v3m-.129 3.872A3 3 0 0 1 16 21H8a3 3 0 0 1-3-3v-6a5.99 5.99 0 0 1 2.285-4.712M10 6V5a2 2 0 1 1 4 0v1" />
      <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="backpack-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBackpackOff;
