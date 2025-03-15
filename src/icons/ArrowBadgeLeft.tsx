import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBadgeLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#arrow-badge-left_svg__a)">
      <path
        fill="currentColor"
        d="M17 6h-6a1 1 0 0 0-.78.375l-4 5a1 1 0 0 0 0 1.25l4 5A1 1 0 0 0 11 18h6l.111-.006a1 1 0 0 0 .67-1.619L14.278 12l3.5-4.375A1 1 0 0 0 17 6"
      />
    </g>
    <defs>
      <clipPath id="arrow-badge-left_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowBadgeLeft;
