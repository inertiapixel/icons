import * as React from "react";
import type { SVGProps } from "react";
const SvgShoeOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shoe-off-icon_svg__a)"
    >
      <path d="m13.846 9.868 4.08.972A4 4 0 0 1 21 14.73V17m-3 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2" />
      <path d="M8 18v-1a4 4 0 0 0-4-4H3M10 11.999l.663-1.327M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="shoe-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShoeOffIcon;
