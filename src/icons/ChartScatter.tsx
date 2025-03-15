import * as React from "react";
import type { SVGProps } from "react";
const SvgChartScatter = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chart-scatter_svg__a)"
    >
      <path d="M3 3v18h18M8 15.016v.015M16 16.016v.015M8 7.031v.015M12 11.031v.015M19 11.031v.015" />
    </g>
    <defs>
      <clipPath id="chart-scatter_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartScatter;
