import * as React from "react";
import type { SVGProps } from "react";
const SvgBed1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bed-1_svg__a)"
    >
      <path d="M5 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0M22 17v-3H2M2 8v9M12 14h10v-2a3 3 0 0 0-3-3h-7z" />
    </g>
    <defs>
      <clipPath id="bed-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBed1;
