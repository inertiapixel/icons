import * as React from "react";
import type { SVGProps } from "react";
const SvgLoader3 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#loader-3_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 9-9" />
      <path d="M17 12a5 5 0 1 0-5 5" />
    </g>
    <defs>
      <clipPath id="loader-3_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLoader3;
