import * as React from "react";
import type { SVGProps } from "react";
const SvgTxt = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#txt_svg__a)"
    >
      <path d="M3 8h4M5 8v8M17 8h4M19 8v8M10 8l4 8M10 16l4-8" />
    </g>
    <defs>
      <clipPath id="txt_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTxt;
