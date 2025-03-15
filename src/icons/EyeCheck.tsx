import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeCheck = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#eye-check_svg__a)"
    >
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M11.102 17.957Q6.297 17.495 3 12q3.6-6 9-6t9 6q-.315.526-.663 1.032M15 19l2 2 4-4" />
    </g>
    <defs>
      <clipPath id="eye-check_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEyeCheck;
