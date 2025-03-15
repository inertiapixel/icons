import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomCancel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#zoom-cancel_svg__a)">
      <path
        fill="currentColor"
        d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.388-5.387A8 8 0 0 1 2 10l.005-.285A8 8 0 0 1 14 3.072m-5.293 4.22a1 1 0 0 0-1.414 1.415L8.585 10l-1.292 1.293a1 1 0 0 0 1.414 1.414L10 11.415l1.293 1.292a1 1 0 0 0 1.414-1.414L11.415 10l1.292-1.293a1 1 0 1 0-1.414-1.414L10 8.585z"
      />
    </g>
    <defs>
      <clipPath id="zoom-cancel_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZoomCancel;
