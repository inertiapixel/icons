import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDiggIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-digg-icon_svg__a)"
    >
      <path d="M6 15H3v-4h3M15 15h-3v-4h3M9 15v-4" />
      <path d="M15 11v7h-3M6 7v8M21 15h-3v-4h3" />
      <path d="M21 11v7h-3" />
    </g>
    <defs>
      <clipPath id="brand-digg-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandDiggIcon;
