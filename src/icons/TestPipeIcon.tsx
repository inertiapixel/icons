import * as React from "react";
import type { SVGProps } from "react";
const SvgTestPipeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#test-pipe-icon_svg__a)"
    >
      <path d="M20 8.04 7.878 20.164a2.857 2.857 0 0 1-4.041-4.04L15.959 4M7 13h8M19 15l1.5 1.6a2 2 0 1 1-3 0zM15 3l6 6" />
    </g>
    <defs>
      <clipPath id="test-pipe-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTestPipeIcon;
