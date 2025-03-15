import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAndroid = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-android_svg__a)"
    >
      <path d="M4 10v6M20 10v6M7 9h10M7 9v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9M7 9a5 5 0 1 1 10 0M8 3l1 2M16 3l-1 2M9 18v3M15 18v3" />
    </g>
    <defs>
      <clipPath id="brand-android_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandAndroid;
