import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandNpmIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-npm-icon_svg__a)"
    >
      <path d="M1 8h22v7H11v2H7v-2H1zM7 8v7M14 8v7M17 11v4M4 11v4M11 11v1M20 11v4" />
    </g>
    <defs>
      <clipPath id="brand-npm-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandNpmIcon;
