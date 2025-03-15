import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#zoom-code_svg__a)">
      <path
        fill="currentColor"
        d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.388-5.387A8 8 0 0 1 2 10l.005-.285A8 8 0 0 1 14 3.072m-5.293 4.22a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.415l2 2a1 1 0 0 0 1.414 0l.083-.094a1 1 0 0 0-.083-1.32L7.415 10l1.292-1.293a1 1 0 0 0 0-1.414m4 0a1 1 0 0 0-1.414 0l-.083.095a1 1 0 0 0 .083 1.32L12.585 10l-1.292 1.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414z"
      />
    </g>
    <defs>
      <clipPath id="zoom-code_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZoomCode;
