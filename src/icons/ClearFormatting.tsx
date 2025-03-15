import * as React from "react";
import type { SVGProps } from "react";
const SvgClearFormatting = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clear-formatting_svg__a)"
    >
      <path d="m17 15 4 4m0-4-4 4M7 6V5h11v1M7 19h4M13 5 9 19" />
    </g>
    <defs>
      <clipPath id="clear-formatting_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClearFormatting;
