import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandMatrix = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-matrix_svg__a)"
    >
      <path d="M4 3H3v18h1M20 21h1V3h-1M7 9v6M12 15v-3.5a2.5 2.5 0 0 0-5 0v.5M17 15v-3.5a2.5 2.5 0 0 0-5 0v.5" />
    </g>
    <defs>
      <clipPath id="brand-matrix_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandMatrix;
