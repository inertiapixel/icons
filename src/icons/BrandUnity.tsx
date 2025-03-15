import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandUnity = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-unity_svg__a)"
    >
      <path d="m14 3 6 4v7M18 17l-6 4-6-4M4 14V7l6-4" />
      <path d="m4 7 8 5v9M20 7l-8 5" />
    </g>
    <defs>
      <clipPath id="brand-unity_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandUnity;
