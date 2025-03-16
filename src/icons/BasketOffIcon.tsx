import * as React from "react";
import type { SVGProps } from "react";
const SvgBasketOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#basket-off-icon_svg__a)"
    >
      <path d="m17 10-2-6M7 10l.75-2.252m1.001-3.002L9 4M12 8h7a2 2 0 0 1 1.976 2.304C20.534 12.82 20.22 14.742 20 16m-1.01 3.003a3 3 0 0 1-2.234.997H7.243a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5 8h3" />
      <path d="M12 12a2 2 0 1 0 2 2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="basket-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBasketOffIcon;
