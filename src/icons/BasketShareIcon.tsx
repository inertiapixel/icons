import * as React from "react";
import type { SVGProps } from "react";
const SvgBasketShareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#basket-share-icon_svg__a)"
    >
      <path d="m17 10-2-6M7 10l2-6M12.5 20H7.242a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5 8h14a2 2 0 0 1 1.976 2.304l-.478 2.723" />
      <path d="M14 14a2 2 0 1 0-2 2M16 22l5-5M21 21.5V17h-4.5" />
    </g>
    <defs>
      <clipPath id="basket-share-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBasketShareIcon;
