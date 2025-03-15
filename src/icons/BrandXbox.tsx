import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandXbox = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-xbox_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5" />
      <path d="M17.5 5C9.78 7.266 7.463 12.597 5 17.5" />
    </g>
    <defs>
      <clipPath id="brand-xbox_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandXbox;
