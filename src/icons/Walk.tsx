import * as React from "react";
import type { SVGProps } from "react";
const SvgWalk = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#walk_svg__a)"
    >
      <path d="M12 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 21l3-4M16 21l-2-4-3-3 1-6" />
      <path d="m6 12 2-3 4-1 3 3 3 1" />
    </g>
    <defs>
      <clipPath id="walk_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWalk;
