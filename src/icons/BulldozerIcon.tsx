import * as React from "react";
import type { SVGProps } from "react";
const SvgBulldozerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bulldozer-icon_svg__a)"
    >
      <path d="M2 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M19 13v4a2 2 0 0 0 2 2h1M14 19H4M4 15h10" />
      <path d="M9 11V6h2a3 3 0 0 1 3 3v6" />
      <path d="M5 15v-3a1 1 0 0 1 1-1h8M19 17h-3" />
    </g>
    <defs>
      <clipPath id="bulldozer-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBulldozerIcon;
