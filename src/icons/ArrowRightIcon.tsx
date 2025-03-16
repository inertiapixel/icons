import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-right-icon_svg__a)"
    >
      <path d="M5 12h14M13 18l6-6M13 6l6 6" />
    </g>
    <defs>
      <clipPath id="arrow-right-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowRightIcon;
