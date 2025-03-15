import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBearLeft = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-bear-left_svg__a)"
    >
      <path d="M13 3H8v5" />
      <path d="m8 3 7.536 7.536A5 5 0 0 1 17 14.07V21" />
    </g>
    <defs>
      <clipPath id="arrow-bear-left_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowBearLeft;
