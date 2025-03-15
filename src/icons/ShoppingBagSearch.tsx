import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingBagSearch = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shopping-bag-search_svg__a)"
    >
      <path d="M11.501 21H8.575a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.332 8h11.34a2 2 0 0 1 1.976 2.304l-.117.761" />
      <path d="M9 11V6a3 3 0 1 1 6 0v5M15 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0M20.2 20.2 22 22" />
    </g>
    <defs>
      <clipPath id="shopping-bag-search_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShoppingBagSearch;
