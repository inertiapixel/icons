import * as React from "react";
import type { SVGProps } from "react";
const SvgDiamondOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#diamond-off_svg__a)"
    >
      <path d="M9 5h9l3 5-3.308 3.697m-1.883 2.104L12.5 19.5a.7.7 0 0 1-1 0L3 10l2.62-4.368" />
      <path d="M10 12 8 9.8l.6-1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="diamond-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDiamondOff;
