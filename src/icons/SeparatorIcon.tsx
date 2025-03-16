import * as React from "react";
import type { SVGProps } from "react";
const SvgSeparatorIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#separator-icon_svg__a)"
    >
      <path d="M3 12v.01M7 12h10M21 12v.01" />
    </g>
    <defs>
      <clipPath id="separator-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSeparatorIcon;
