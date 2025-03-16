import * as React from "react";
import type { SVGProps } from "react";
const SvgCellSignalOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cell-signal-off-icon_svg__a)"
    >
      <path d="M20.001 20H4.732a.73.73 0 0 1-.517-1.249l7.265-7.264m2-2 5.272-5.272a.731.731 0 0 1 1.25.517v11.27M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="cell-signal-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCellSignalOffIcon;
