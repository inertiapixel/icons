import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingCartSearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shopping-cart-search-icon_svg__a)"
    >
      <path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M11 17H6V3H4" />
      <path d="m6 5 14 1-.718 5.023M13 13H6M15 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0M20.2 20.2 22 22" />
    </g>
    <defs>
      <clipPath id="shopping-cart-search-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShoppingCartSearchIcon;
