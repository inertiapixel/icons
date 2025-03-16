import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartDiscountIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#heart-discount-icon_svg__a)"
    >
      <path d="m13.001 19-1 1-7.5-7.428a5 5 0 1 1 7.5-6.566 5 5 0 1 1 7.5 6.572M16 21l5-5M21 21v.01M16 16v.01" />
    </g>
    <defs>
      <clipPath id="heart-discount-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartDiscountIcon;
