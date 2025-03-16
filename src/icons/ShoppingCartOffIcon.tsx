import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingCartOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shopping-cart-off-icon_svg__a)"
    >
      <path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 17a2 2 0 1 0 2 2" />
      <path d="M17 17H6V6M9.239 5.23 20 6l-1 7h-2m-4 0H6M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="shopping-cart-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShoppingCartOffIcon;
