import * as React from "react";
import type { SVGProps } from "react";
const SvgDiscountOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#discount-off-icon_svg__a)"
    >
      <path d="m9 15 3-3m2-2 1-1M9.147 9.145a.498.498 0 0 0 .352.855.5.5 0 0 0 .35-.142M14.147 14.145a.498.498 0 0 0 .352.854.5.5 0 0 0 .35-.142" />
      <path d="M5.64 5.632A9 9 0 0 0 18.36 18.37m1.68-2.318A9 9 0 0 0 7.966 3.954M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="discount-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDiscountOffIcon;
