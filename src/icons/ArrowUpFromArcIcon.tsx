import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpFromArcIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-up-from-arc-icon_svg__a)"
    >
      <path d="M12 9v12M8 17l4 4 4-4M21 12a9 9 0 1 0-18 0" />
    </g>
    <defs>
      <clipPath id="arrow-up-from-arc-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowUpFromArcIcon;
