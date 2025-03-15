import * as React from "react";
import type { SVGProps } from "react";
const SvgRipple = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ripple_svg__a)"
    >
      <path d="M3 7q4.5-3 9 0t9 0M3 17q4.5-3 9 0t9 0M3 12q4.5-3 9 0t9 0" />
    </g>
    <defs>
      <clipPath id="ripple_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRipple;
