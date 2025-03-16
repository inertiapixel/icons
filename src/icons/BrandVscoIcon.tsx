import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandVscoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-vsco-icon_svg__a)"
    >
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
      <path d="M17 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0M12 3v4M21 12h-4M12 21v-4M3 12h4M18.363 5.637l-2.828 2.828M18.363 18.363l-2.828-2.828M5.637 18.363l2.828-2.828M5.637 5.637l2.828 2.828" />
    </g>
    <defs>
      <clipPath id="brand-vsco-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandVscoIcon;
