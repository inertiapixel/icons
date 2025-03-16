import * as React from "react";
import type { SVGProps } from "react";
const SvgSubmarineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#submarine-icon_svg__a)"
    >
      <path d="M3 11v6h2l1-1.5L9 17h10a3 3 0 0 0 0-6H9l-3 1.5L5 11zM17 11l-1-3h-5l-1 3M13 8V6a1 1 0 0 1 1-1h1" />
    </g>
    <defs>
      <clipPath id="submarine-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSubmarineIcon;
