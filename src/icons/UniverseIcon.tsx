import * as React from "react";
import type { SVGProps } from "react";
const SvgUniverseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#universe-icon_svg__a)"
    >
      <path d="M7.027 11.479a5 5 0 1 0 2.408-3.77" />
      <path d="M5.638 5.634a9 9 0 1 0 3.555-2.188" />
      <path d="M17 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </g>
    <defs>
      <clipPath id="universe-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUniverseIcon;
