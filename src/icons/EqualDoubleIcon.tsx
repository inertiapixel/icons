import * as React from "react";
import type { SVGProps } from "react";
const SvgEqualDoubleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#equal-double-icon_svg__a)"
    >
      <path d="M3 10h7M3 14h7M14 10h7M14 14h7" />
    </g>
    <defs>
      <clipPath id="equal-double-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEqualDoubleIcon;
