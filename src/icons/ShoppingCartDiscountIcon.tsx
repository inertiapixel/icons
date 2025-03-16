import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingCartDiscountIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shopping-cart-discount-icon_svg__a)"
    >
      <path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M12.5 17H6V3H4" />
      <path d="m6 5 14 1-.859 6.011M13 13H6M16 21l5-5M21 21v.01M16 16v.01" />
    </g>
    <defs>
      <clipPath id="shopping-cart-discount-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShoppingCartDiscountIcon;
