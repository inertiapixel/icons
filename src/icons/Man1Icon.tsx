import * as React from "react";
import type { SVGProps } from "react";
const SvgMan1Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#man-1-icon_svg__a)"
    >
      <path d="M10 16v5M14 16v5M9 9h6l-1 7h-4zM5 11q2-2 4-2M19 11q-2-2-4-2M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    </g>
    <defs>
      <clipPath id="man-1-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMan1Icon;
