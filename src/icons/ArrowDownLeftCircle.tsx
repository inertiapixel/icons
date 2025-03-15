import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownLeftCircle = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-down-left-circle_svg__a)"
    >
      <path d="M15.536 8.465 6 18M6 14v4h4M15.585 8.413a1.999 1.999 0 1 0 2.876-2.777 1.999 1.999 0 0 0-2.876 2.777" />
    </g>
    <defs>
      <clipPath id="arrow-down-left-circle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowDownLeftCircle;
