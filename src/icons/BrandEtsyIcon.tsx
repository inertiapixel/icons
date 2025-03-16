import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandEtsyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-etsy-icon_svg__a)"
    >
      <path d="M14 12H9M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z" />
      <path d="M15 16h-5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5" />
    </g>
    <defs>
      <clipPath id="brand-etsy-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandEtsyIcon;
