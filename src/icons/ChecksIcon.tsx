import * as React from "react";
import type { SVGProps } from "react";
const SvgChecksIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#checks-icon_svg__a)"
    >
      <path d="m7 12 5 5L22 7M2 12l5 5m5-5 5-5" />
    </g>
    <defs>
      <clipPath id="checks-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChecksIcon;
