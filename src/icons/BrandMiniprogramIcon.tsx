import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandMiniprogramIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-miniprogram-icon_svg__a)"
    >
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
      <path d="M8 11.504a2.5 2.5 0 1 0 4 2v-3a2.5 2.5 0 1 1 4 2" />
    </g>
    <defs>
      <clipPath id="brand-miniprogram-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandMiniprogramIcon;
