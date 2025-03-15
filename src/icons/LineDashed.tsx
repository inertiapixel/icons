import * as React from "react";
import type { SVGProps } from "react";
const SvgLineDashed = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#line-dashed_svg__a)"
    >
      <path d="M5 12h2M17 12h2M11 12h2" />
    </g>
    <defs>
      <clipPath id="line-dashed_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLineDashed;
