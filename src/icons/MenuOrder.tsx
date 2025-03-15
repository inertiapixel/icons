import * as React from "react";
import type { SVGProps } from "react";
const SvgMenuOrder = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#menu-order_svg__a)"
    >
      <path d="M4 10h16M4 14h16M9 18l3 3 3-3M9 6l3-3 3 3" />
    </g>
    <defs>
      <clipPath id="menu-order_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMenuOrder;
