import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronRightPipeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chevron-right-pipe-icon_svg__a)"
    >
      <path d="m6 6 6 6-6 6M17 5v13" />
    </g>
    <defs>
      <clipPath id="chevron-right-pipe-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChevronRightPipeIcon;
