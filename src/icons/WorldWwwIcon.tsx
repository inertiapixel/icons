import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldWwwIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-www-icon_svg__a)"
    >
      <path d="M19.5 7A9 9 0 0 0 12 3a8.99 8.99 0 0 0-7.484 4" />
      <path d="M11.502 3a17 17 0 0 0-1.826 4M12.5 3a17 17 0 0 1 1.828 4M19.5 17a9 9 0 0 1-7.5 4 8.99 8.99 0 0 1-7.484-4" />
      <path d="M11.502 21a17 17 0 0 1-1.826-4M12.5 21a17 17 0 0 0 1.828-4M2 10l1 4 1.5-4L6 14l1-4M17 10l1 4 1.5-4 1.5 4 1-4M9.5 10l1 4 1.5-4 1.5 4 1-4" />
    </g>
    <defs>
      <clipPath id="world-www-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldWwwIcon;
