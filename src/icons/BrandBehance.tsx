import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandBehance = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-behance_svg__a)"
    >
      <path d="M3 18V6h4.5a3 3 0 1 1 0 6 3 3 0 0 1 0 6zM3 12h4.5M14 13h7a3.5 3.5 0 1 0-7 0m0 0v2a3.5 3.5 0 0 0 6.64 1M16 6h3" />
    </g>
    <defs>
      <clipPath id="brand-behance_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandBehance;
