import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#align-right-icon_svg__a)"
    >
      <path d="M4 6h16M10 12h10M6 18h14" />
    </g>
    <defs>
      <clipPath id="align-right-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlignRightIcon;
