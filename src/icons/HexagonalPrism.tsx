import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagonalPrism = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hexagonal-prism_svg__a)"
    >
      <path d="M20.793 6.996 17.018 9.64c-.337.235-.737.36-1.147.361H8.13c-.41 0-.81-.126-1.146-.362L3.21 6.998M8 10v11M16 10v11" />
      <path d="m3.853 18.274 3.367 2.363A2 2 0 0 0 8.367 21h7.265c.41 0 .811-.126 1.147-.363l3.367-2.363c.536-.375.854-.99.854-1.643V7.369c0-.655-.318-1.268-.853-1.643L16.78 3.363A2 2 0 0 0 15.633 3H8.367c-.41 0-.811.126-1.147.363L3.853 5.726A2 2 0 0 0 3 7.37v9.261c0 .655.318 1.268.853 1.643" />
    </g>
    <defs>
      <clipPath id="hexagonal-prism_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHexagonalPrism;
