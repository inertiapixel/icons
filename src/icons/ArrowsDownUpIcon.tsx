import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsDownUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-down-up-icon_svg__a)"
    >
      <path d="M17 3v18M10 18l-3 3-3-3M7 21V3M20 6l-3-3-3 3" />
    </g>
    <defs>
      <clipPath id="arrows-down-up-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsDownUpIcon;
