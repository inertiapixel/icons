import * as React from "react";
import type { SVGProps } from "react";
const SvgBusinessplan = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#businessplan_svg__a)"
    >
      <path d="M11 6c0 .796.527 1.559 1.464 2.121.938.563 2.21.879 3.536.879s2.598-.316 3.535-.879S21 6.796 21 6s-.527-1.559-1.465-2.121C18.598 3.316 17.327 3 16 3s-2.598.316-3.536.879C11.528 4.44 11 5.204 11 6" />
      <path d="M11 6v4c0 1.657 2.239 3 5 3s5-1.343 5-3V6" />
      <path d="M11 10v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4" />
      <path d="M11 14v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4M7 9H4.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 1 1 0 3H3M5 15v1m0-8v1" />
    </g>
    <defs>
      <clipPath id="businessplan_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBusinessplan;
