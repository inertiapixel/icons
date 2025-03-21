import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowNarrowUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-narrow-up-icon_svg__a)"
    >
      <path d="M12 5v14M16 9l-4-4M8 9l4-4" />
    </g>
    <defs>
      <clipPath id="arrow-narrow-up-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowNarrowUpIcon;
