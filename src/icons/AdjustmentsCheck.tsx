import * as React from "react";
import type { SVGProps } from "react";
const SvgAdjustmentsCheck = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#adjustments-check_svg__a)"
    >
      <path d="M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 4v4M6 12v8M13.822 15.175a2 2 0 1 0-2.638 2.65M12 4v10M16 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0M18 4v1M18 9v5M15 19l2 2 4-4" />
    </g>
    <defs>
      <clipPath id="adjustments-check_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAdjustmentsCheck;
