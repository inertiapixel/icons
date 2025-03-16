import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingCartDollarIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shopping-cart-dollar-icon_svg__a)"
    >
      <path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M13 17H6V3H4" />
      <path d="m6 5 14 1-.575 4.022M14.5 13H6M21 15h-2.5a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 1 1 0 3H17M19 21v1m0-8v1" />
    </g>
    <defs>
      <clipPath id="shopping-cart-dollar-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShoppingCartDollarIcon;
