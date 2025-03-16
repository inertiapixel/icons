import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandPaypayIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-paypay-icon_svg__a)"
    >
      <path d="M6.375 20.998 10.313 7.16M3 6c16.731 0 21.231 9.881 4.5 11" />
      <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2" />
    </g>
    <defs>
      <clipPath id="brand-paypay-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandPaypayIcon;
