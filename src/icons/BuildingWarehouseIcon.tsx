import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingWarehouseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#building-warehouse-icon_svg__a)"
    >
      <path d="M3 21V8l9-4 9 4v13" />
      <path d="M13 13h4v8H7v-6h6" />
      <path d="M13 21v-9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
    </g>
    <defs>
      <clipPath id="building-warehouse-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBuildingWarehouseIcon;
