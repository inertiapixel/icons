import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronLeftPipe = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chevron-left-pipe_svg__a)"
    >
      <path d="M7 6v12M18 6l-6 6 6 6" />
    </g>
    <defs>
      <clipPath id="chevron-left-pipe_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChevronLeftPipe;
