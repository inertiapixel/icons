import * as React from "react";
import type { SVGProps } from "react";
const SvgChartPpfIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chart-ppf-icon_svg__a)"
    >
      <path d="M19 17c0-6.075-5.373-11-12-11M3 3v18h18" />
    </g>
    <defs>
      <clipPath id="chart-ppf-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartPpfIcon;
