import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandTumblr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-tumblr_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 21h4v-4h-4v-6h4V7h-4V3h-4v1a3 3 0 0 1-3 3H6v4h4v6a4 4 0 0 0 4 4"
      />
    </g>
    <defs>
      <clipPath id="brand-tumblr_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandTumblr;
