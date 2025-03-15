import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandVite = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-vite_svg__a)"
    >
      <path d="M10 4.5 16 3l-2 6.5 2-.5-4 7v-5l-3 1z" />
      <path d="M15 6.5 22 5 12 22 2 5l7.741 1.5" />
    </g>
    <defs>
      <clipPath id="brand-vite_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandVite;
