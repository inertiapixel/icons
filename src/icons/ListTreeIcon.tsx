import * as React from "react";
import type { SVGProps } from "react";
const SvgListTreeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#list-tree-icon_svg__a)"
    >
      <path d="M9 6h11M12 12h8M15 18h5M5 6v.01M8 12v.01M11 18v.01" />
    </g>
    <defs>
      <clipPath id="list-tree-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgListTreeIcon;
