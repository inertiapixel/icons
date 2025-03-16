import * as React from "react";
import type { SVGProps } from "react";
const SvgArcheryArrowIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#archery-arrow-icon_svg__a)"
    >
      <path d="M14 7v3h3l3-3h-3V4zM14 10l-9 9M5 15v4h4" />
    </g>
    <defs>
      <clipPath id="archery-arrow-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArcheryArrowIcon;
