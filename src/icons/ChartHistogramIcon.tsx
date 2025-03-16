import * as React from "react";
import type { SVGProps } from "react";
const SvgChartHistogramIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chart-histogram-icon_svg__a)"
    >
      <path d="M3 3v18h18M20 18v3M16 16v5M12 13v8M8 16v5" />
      <path d="M3 11c6 0 5-5 9-5s3 5 9 5" />
    </g>
    <defs>
      <clipPath id="chart-histogram-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartHistogramIcon;
