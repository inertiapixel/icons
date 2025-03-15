import * as React from "react";
import type { SVGProps } from "react";
const SvgChartAreaLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#chart-area-line_svg__a)">
      <path d="M15.22 9.375a1 1 0 0 1 1.393-.165l.094.083 4 4a1 1 0 0 1 .284.576l.009.13v5a1 1 0 0 1-.883.994L20 20H3.978l-.11-.01-.11-.02-.107-.033-.105-.046-.1-.06-.094-.07-.06-.054-.072-.082-.064-.09-.054-.095-.016-.035-.04-.103-.027-.106-.015-.108-.004-.11.009-.11.019-.105q.015-.06.035-.112l.046-.105.059-.1 4-6a1 1 0 0 1 1.165-.39l.114.05 3.277 1.638 3.495-4.37z" />
      <path d="M15.232 3.36a1 1 0 0 1 1.382-.15l.093.083 4 4a1 1 0 0 1-1.32 1.497l-.094-.083-3.226-3.225-4.299 5.158a1 1 0 0 1-1.1.303l-.115-.049L7.3 9.268 4.8 12.6a1 1 0 0 1-1.295.27L3.4 12.8a1 1 0 0 1-.269-1.295l.07-.105 3-4a1 1 0 0 1 1.136-.34l.11.046 3.291 1.645z" />
    </g>
    <defs>
      <clipPath id="chart-area-line_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartAreaLine;
