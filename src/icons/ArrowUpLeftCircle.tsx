import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpLeftCircle = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-up-left-circle_svg__a)"
    >
      <path d="M15.536 15.536 6 6M10 6H6v4M15.587 15.585a2 2 0 1 0 2.78 2.878 2 2 0 0 0-2.78-2.878" />
    </g>
    <defs>
      <clipPath id="arrow-up-left-circle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowUpLeftCircle;
