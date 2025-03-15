import * as React from "react";
import type { SVGProps } from "react";
const SvgAbacusOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#abacus-off_svg__a)"
    >
      <path d="M5 5v16M19 21v-2m0-4V3M5 7h2m4 0h8M5 15h10M8 13v4M11 13v4M16 16v1M14 5v4M11 5v2M8 8v1M3 21h18M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="abacus-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAbacusOff;
