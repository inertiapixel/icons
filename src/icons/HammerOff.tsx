import * as React from "react";
import type { SVGProps } from "react";
const SvgHammerOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hammer-off_svg__a)"
    >
      <path d="M10.7 10.719 4.03 17.417a2.09 2.09 0 0 0 0 2.967 2.11 2.11 0 0 0 2.976 0l6.697-6.676M18.715 14.703l2-2a1 1 0 0 0 0-1.414l-7.586-7.586a1 1 0 0 0-1.414 0l-2 2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="hammer-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHammerOff;
