import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationWestIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#navigation-west-icon_svg__a)"
    >
      <path d="m9 3 1 6 2-3.75L14 9l1-6M16 21l-4-8-4 8 4-2z" />
    </g>
    <defs>
      <clipPath id="navigation-west-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNavigationWestIcon;
