import * as React from "react";
import type { SVGProps } from "react";
const SvgAB = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#a-b_svg__a)"
    >
      <path d="M3 16v-5.5a2.5 2.5 0 1 1 5 0V16m0-4H3M12 6v12M19 12a2 2 0 0 0 0-4h-3v8h3a2 2 0 0 0 0-4m0 0h-3" />
    </g>
    <defs>
      <clipPath id="a-b_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAB;
