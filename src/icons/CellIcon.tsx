import * as React from "react";
import type { SVGProps } from "react";
const SvgCellIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cell-icon_svg__a)"
    >
      <path d="M8 4 4 6v5l4 2 4-2V6zM12 11l4 2 4-2V6l-4-2-4 2M8 13v5l4 2 4-2v-5" />
    </g>
    <defs>
      <clipPath id="cell-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCellIcon;
