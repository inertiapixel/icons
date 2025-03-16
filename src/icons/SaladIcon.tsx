import * as React from "react";
import type { SVGProps } from "react";
const SvgSaladIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#salad-icon_svg__a)"
    >
      <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5-2.517 5.573-4 6.5v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c-1.687-1.054-4-5-4-6.5V12a1 1 0 0 1 1-1M18.502 11c.35-1.017.425-2.236.5-3.714V6h-2.256c-2.83 0-4.616.804-5.64 2.076" />
      <path d="M5.255 11.008A12 12 0 0 1 5 9V8h1.755c.98 0 1.801.124 2.479.35M8 8l1-4 4 2.5" />
      <path d="M13 11v-.5a2.5 2.5 0 0 0-5 0v.5" />
    </g>
    <defs>
      <clipPath id="salad-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSaladIcon;
