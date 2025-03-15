import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#zoom-exclamation_svg__a)">
      <path
        fill="currentColor"
        d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.388-5.387A8 8 0 0 1 2 10l.005-.285A8 8 0 0 1 14 3.072M10 12a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 11 13.01l-.007-.127A1 1 0 0 0 10 12m0-6a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1"
      />
    </g>
    <defs>
      <clipPath id="zoom-exclamation_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZoomExclamation;
