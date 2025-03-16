import * as React from "react";
import type { SVGProps } from "react";
const SvgFiltersIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#filters-icon_svg__a)"
    >
      <path d="M7 8a5 5 0 1 0 10 0A5 5 0 0 0 7 8" />
      <path d="M8 11a5 5 0 1 0 3.998 1.997" />
      <path d="M12.004 19.003A5 5 0 1 0 16.002 11" />
    </g>
    <defs>
      <clipPath id="filters-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFiltersIcon;
