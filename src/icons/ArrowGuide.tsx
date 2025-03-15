import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowGuide = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-guide_svg__a)"
    >
      <path d="M3 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 19h3a2 2 0 0 0 2-2V9a2 2 0 0 1 2-2h7" />
      <path d="m18 4 3 3-3 3" />
    </g>
    <defs>
      <clipPath id="arrow-guide_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowGuide;
