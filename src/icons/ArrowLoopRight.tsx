import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLoopRight = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-loop-right_svg__a)"
    >
      <path d="M12 21V8a4 4 0 1 0-4 4h13" />
      <path d="m17 16 4-4-4-4" />
    </g>
    <defs>
      <clipPath id="arrow-loop-right_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowLoopRight;
