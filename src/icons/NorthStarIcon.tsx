import * as React from "react";
import type { SVGProps } from "react";
const SvgNorthStarIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#north-star-icon_svg__a)"
    >
      <path d="M3 12h18M12 21V3M7.5 7.5l9 9M7.5 16.5l9-9" />
    </g>
    <defs>
      <clipPath id="north-star-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNorthStarIcon;
