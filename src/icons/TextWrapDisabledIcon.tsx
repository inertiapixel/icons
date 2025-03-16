import * as React from "react";
import type { SVGProps } from "react";
const SvgTextWrapDisabledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#text-wrap-disabled-icon_svg__a)"
    >
      <path d="M4 6h10M4 18h10M4 12h17m0 0-3-3m3 3-3 3" />
    </g>
    <defs>
      <clipPath id="text-wrap-disabled-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextWrapDisabledIcon;
