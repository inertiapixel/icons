import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldChevronIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shield-chevron-icon_svg__a)"
    >
      <path d="M11.999 3a12 12 0 0 0 8.5 3 12.003 12.003 0 0 1-8.5 15 12 12 0 0 1-8.5-15 12 12 0 0 0 8.5-3" />
      <path d="m4 14 8-3 8 3" />
    </g>
    <defs>
      <clipPath id="shield-chevron-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShieldChevronIcon;
