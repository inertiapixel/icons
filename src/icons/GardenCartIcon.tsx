import * as React from "react";
import type { SVGProps } from "react";
const SvgGardenCartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#garden-cart-icon_svg__a)"
    >
      <path d="M15 17.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M6 8v11a1 1 0 0 0 1.806.591L11.5 14.5v.055" />
      <path d="M6 8h15l-3.5 7-7.1-.747a4 4 0 0 1-3.296-2.493L4.251 4.63A1 1 0 0 0 3.323 4H2" />
    </g>
    <defs>
      <clipPath id="garden-cart-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGardenCartIcon;
