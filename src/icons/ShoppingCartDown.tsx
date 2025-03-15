import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingCartDown = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shopping-cart-down_svg__a)"
    >
      <path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M12.5 17H6V3H4" />
      <path d="m6 5 14 1-.859 6.011M16.5 13H6M19 16v6M22 19l-3 3-3-3" />
    </g>
    <defs>
      <clipPath id="shopping-cart-down_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShoppingCartDown;
