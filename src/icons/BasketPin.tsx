import * as React from "react";
import type { SVGProps } from "react";
const SvgBasketPin = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#basket-pin_svg__a)"
    >
      <path d="m17 10-2-6M7 10l2-6M12 20H7.242a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5 8h14a2 2 0 0 1 1.976 2.304l-.16.92" />
      <path d="M13.866 13.28A2 2 0 1 0 12 16M21.121 20.122a3 3 0 1 0-4.242 0Q17.506 20.75 19 22q1.577-1.334 2.121-1.88M19 18v.01" />
    </g>
    <defs>
      <clipPath id="basket-pin_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBasketPin;
