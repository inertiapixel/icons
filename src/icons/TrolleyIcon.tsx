import * as React from "react";
import type { SVGProps } from "react";
const SvgTrolleyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#trolley-icon_svg__a)"
    >
      <path d="M9 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 16l3 2M12 17l8-12M17 10l2 1M9.592 4.695 12.9 6.799a1.3 1.3 0 0 1 .396 1.8l-3.094 4.81a1.3 1.3 0 0 1-1.793.395L5.102 11.7a1.3 1.3 0 0 1-.396-1.8L7.8 5.09a1.3 1.3 0 0 1 1.792-.395" />
    </g>
    <defs>
      <clipPath id="trolley-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrolleyIcon;
