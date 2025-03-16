import * as React from "react";
import type { SVGProps } from "react";
const SvgTestPipe2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#test-pipe-2-icon_svg__a)"
    >
      <path d="M15 3v15a3 3 0 0 1-6 0V3M9 12h6M8 3h8" />
    </g>
    <defs>
      <clipPath id="test-pipe-2-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTestPipe2Icon;
