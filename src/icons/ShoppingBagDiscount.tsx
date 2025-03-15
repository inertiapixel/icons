import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingBagDiscount = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shopping-bag-discount_svg__a)"
    >
      <path d="M12.501 21H8.575a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.332 8h11.34a2 2 0 0 1 1.976 2.304l-.416 2.7" />
      <path d="M9 11V6a3 3 0 1 1 6 0v5M16 21l5-5M21 21v.01M16 16v.01" />
    </g>
    <defs>
      <clipPath id="shopping-bag-discount_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShoppingBagDiscount;
