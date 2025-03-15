import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownRightCircle = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-down-right-circle_svg__a)"
    >
      <path d="M8.465 8.465 18 18M14 18h4v-4M8.413 8.415a2 2 0 1 0-2.779-2.877 2 2 0 0 0 2.779 2.877" />
    </g>
    <defs>
      <clipPath id="arrow-down-right-circle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowDownRightCircle;
