import * as React from "react";
import type { SVGProps } from "react";
const SvgChartSankey = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chart-sankey_svg__a)"
    >
      <path d="M3 3v18h18M3 6h18" />
      <path d="M3 8c10 0 8 9 18 9" />
    </g>
    <defs>
      <clipPath id="chart-sankey_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartSankey;
