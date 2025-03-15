import * as React from "react";
import type { SVGProps } from "react";
const SvgTextResize = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#text-resize_svg__a)"
    >
      <path d="M3 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5 7v10M7 5h10M7 19h10M19 7v10M10 10h4M12 14v-4" />
    </g>
    <defs>
      <clipPath id="text-resize_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextResize;
