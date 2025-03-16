import * as React from "react";
import type { SVGProps } from "react";
const SvgUTurnRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#u-turn-right-icon_svg__a)"
    >
      <path d="M7 20V8.5a4.5 4.5 0 0 1 9 0V17" />
      <path d="m13 14 3 3 3-3" />
    </g>
    <defs>
      <clipPath id="u-turn-right-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUTurnRightIcon;
