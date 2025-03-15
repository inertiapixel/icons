import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandTed = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-ted_svg__a)"
    >
      <path d="M2 8h4M4 8v8M13 8H9v8h4M9 12h2.5M16 8v8h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3z" />
    </g>
    <defs>
      <clipPath id="brand-ted_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandTed;
