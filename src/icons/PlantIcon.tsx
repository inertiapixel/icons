import * as React from "react";
import type { SVGProps } from "react";
const SvgPlantIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#plant-icon_svg__a)"
    >
      <path d="M7 15h10v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zM12 9a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3M12 11a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3M12 15V9" />
    </g>
    <defs>
      <clipPath id="plant-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlantIcon;
