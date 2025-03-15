import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandVue = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-vue_svg__a)"
    >
      <path d="M16.5 4 12 12 7.5 4" />
      <path d="m3 4 9 16 9-16" />
    </g>
    <defs>
      <clipPath id="brand-vue_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandVue;
