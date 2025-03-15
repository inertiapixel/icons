import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsSplit = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-split_svg__a)"
    >
      <path d="M21 17h-8l-3.5-5H3M20.999 7h-8l-3.495 5" />
      <path d="m18 10 3-3-3-3M18 20l3-3-3-3" />
    </g>
    <defs>
      <clipPath id="arrows-split_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsSplit;
