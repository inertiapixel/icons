import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandBloggerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-blogger-icon_svg__a)"
    >
      <path d="M8 21h8a5 5 0 0 0 5-5v-3a3 3 0 0 0-3-3h-1V8a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5" />
      <path d="M7 8.5A1.5 1.5 0 0 1 8.5 7h3a1.5 1.5 0 0 1 0 3h-3A1.5 1.5 0 0 1 7 8.5M7 15.5A1.5 1.5 0 0 1 8.5 14h7a1.5 1.5 0 1 1 0 3h-7A1.5 1.5 0 0 1 7 15.5" />
    </g>
    <defs>
      <clipPath id="brand-blogger-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandBloggerIcon;
