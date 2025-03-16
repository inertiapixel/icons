import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagonalPyramidIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hexagonal-pyramid-icon_svg__a)"
    >
      <path d="M11.162 2.458 3.316 15.412a1.99 1.99 0 0 0 .267 2.483l2.527 2.523c.374.373.88.583 1.408.583h8.964c.528 0 1.034-.21 1.408-.583l2.527-2.523a1.99 1.99 0 0 0 .267-2.483L12.838 2.458a.995.995 0 0 0-1.676 0M12 2 7 20.9M12 2l5 18.9" />
    </g>
    <defs>
      <clipPath id="hexagonal-pyramid-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHexagonalPyramidIcon;
