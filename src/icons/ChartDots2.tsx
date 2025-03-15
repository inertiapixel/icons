import * as React from "react";
import type { SVGProps } from "react";
const SvgChartDots2 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chart-dots-2_svg__a)"
    >
      <path d="M3 3v18h18" />
      <path d="M7 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0M11 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M16 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0M21 3l-6 1.5M14.113 6.648l2.771 3.695M16 12.5l-5 2" />
    </g>
    <defs>
      <clipPath id="chart-dots-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartDots2;
