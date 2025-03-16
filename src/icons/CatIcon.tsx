import * as React from "react";
import type { SVGProps } from "react";
const SvgCatIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cat-icon_svg__a)"
    >
      <path d="M20 3v10a8 8 0 0 1-16 0V3l3.432 3.432A7.96 7.96 0 0 1 12 5c1.769 0 3.403.574 4.728 1.546z" />
      <path d="M2 16h5l-4 4M22 16h-5l4 4M11 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0M9 11v.01M15 11v.01" />
    </g>
    <defs>
      <clipPath id="cat-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCatIcon;
