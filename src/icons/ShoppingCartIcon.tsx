import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingCartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#shopping-cart-icon_svg__a)">
      <path
        fill="currentColor"
        d="M6 2a1 1 0 0 1 .993.883L7 3v1.068l13.071.935A1 1 0 0 1 21 6.027l-.01.114-1 7a1 1 0 0 1-.877.853L19 14H7v2h10a3 3 0 1 1-2.995 3.176L14 19l.005-.176q.027-.433.166-.824H8.829a3 3 0 1 1-5.824 1.176L3 19l.005-.176A3 3 0 0 1 5 16.17V4H4a1 1 0 0 1-.993-.883L3 3a1 1 0 0 1 .883-.993L4 2zm0 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m11 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      />
    </g>
    <defs>
      <clipPath id="shopping-cart-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShoppingCartIcon;
