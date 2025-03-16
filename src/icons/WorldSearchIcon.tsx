import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldSearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-search-icon_svg__a)"
    >
      <path d="M21 12a9 9 0 1 0-9 9M3.602 9h16.8M3.602 15h7.9" />
      <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 2.574 8.62M15 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0M20.2 20.2 22 22" />
    </g>
    <defs>
      <clipPath id="world-search-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldSearchIcon;
