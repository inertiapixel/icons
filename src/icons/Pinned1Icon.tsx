import * as React from "react";
import type { SVGProps } from "react";
const SvgPinned1Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pinned-1-icon_svg__a)"
    >
      <path d="M9 4v6l-2 4v2h10v-2l-2-4V4M12 16v5M8 4h8" />
    </g>
    <defs>
      <clipPath id="pinned-1-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPinned1Icon;
