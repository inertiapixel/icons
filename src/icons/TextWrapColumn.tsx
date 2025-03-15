import * as React from "react";
import type { SVGProps } from "react";
const SvgTextWrapColumn = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#text-wrap-column_svg__a)"
    >
      <path d="M7 9h7a3 3 0 0 1 0 6h-4l2-2M12 17l-2-2M3 3v18M21 3v18" />
    </g>
    <defs>
      <clipPath id="text-wrap-column_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextWrapColumn;
