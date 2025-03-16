import * as React from "react";
import type { SVGProps } from "react";
const SvgRibbonHealthIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ribbon-health-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21s9.286-9.84 9.286-13.84a3.87 3.87 0 0 0-1.182-3.009A4.13 4.13 0 0 0 12 3.007 4.13 4.13 0 0 0 8.896 4.15a3.86 3.86 0 0 0-1.182 3.01C7.714 11.16 17 21 17 21"
      />
    </g>
    <defs>
      <clipPath id="ribbon-health-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRibbonHealthIcon;
