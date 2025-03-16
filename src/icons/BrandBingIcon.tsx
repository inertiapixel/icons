import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandBingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-bing-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m5 3 4 1.5v12l6-2.5-2-1-1-4 7 2.5V16L9 21l-4-2z"
      />
    </g>
    <defs>
      <clipPath id="brand-bing-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandBingIcon;
