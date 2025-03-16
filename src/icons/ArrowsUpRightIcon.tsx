import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsUpRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-up-right-icon_svg__a)"
    >
      <path d="m17 21 4-4-4-4" />
      <path d="M21 17H10a3 3 0 0 1-3-3V3" />
      <path d="M11 7 7 3 3 7" />
    </g>
    <defs>
      <clipPath id="arrows-up-right-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsUpRightIcon;
