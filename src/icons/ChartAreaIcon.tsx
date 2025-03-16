import * as React from "react";
import type { SVGProps } from "react";
const SvgChartAreaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#chart-area-icon_svg__a)">
      <path d="M19.999 18a1 1 0 0 1 .117 1.993l-.117.007h-16a1 1 0 0 1-.117-1.993L3.999 18zM15.22 5.375a1 1 0 0 1 1.393-.165l.094.083 4 4a1 1 0 0 1 .284.576l.009.13v5a1 1 0 0 1-.883.994L20 16H3.978l-.11-.01-.11-.02-.107-.033-.105-.046-.1-.06-.094-.07-.06-.054-.072-.082-.064-.09-.054-.095-.016-.035-.04-.103-.027-.106-.015-.108-.004-.11.009-.11.019-.105q.015-.06.035-.112l.046-.105.059-.1 4-6a1 1 0 0 1 1.165-.39l.114.05 3.277 1.638 3.495-4.37z" />
    </g>
    <defs>
      <clipPath id="chart-area-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartAreaIcon;
