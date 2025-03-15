import * as React from "react";
import type { SVGProps } from "react";
const SvgClearAll = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clear-all_svg__a)"
    >
      <path d="M8 6h12M6 12h12M4 18h12" />
    </g>
    <defs>
      <clipPath id="clear-all_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClearAll;
