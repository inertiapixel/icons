import * as React from "react";
import type { SVGProps } from "react";
const SvgBasketCode = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#basket-code_svg__a)"
    >
      <path d="m17 10-2-6M7 10l2-6M11 20H7.242a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5 8h14a2 2 0 0 1 1.976 2.304q-.316 1.803-.475 2.705" />
      <path d="M10 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0M20 21l2-2-2-2M17 17l-2 2 2 2" />
    </g>
    <defs>
      <clipPath id="basket-code_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBasketCode;
