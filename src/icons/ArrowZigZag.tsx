import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowZigZag = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-zig-zag_svg__a)"
    >
      <path d="M6 20V10l10 6V4" />
      <path d="m13 7 3-3 3 3" />
    </g>
    <defs>
      <clipPath id="arrow-zig-zag_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowZigZag;
