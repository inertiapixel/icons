import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBarBoth = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-bar-both_svg__a)"
    >
      <path d="M8 12H2M5 15l-3-3 3-3M22 12h-6M19 15l3-3-3-3M12 4v16" />
    </g>
    <defs>
      <clipPath id="arrow-bar-both_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowBarBoth;
