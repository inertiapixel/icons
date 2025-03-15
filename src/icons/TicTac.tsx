import * as React from "react";
import type { SVGProps } from "react";
const SvgTicTac = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#tic-tac_svg__a)"
    >
      <path d="M4 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 12h18M12 3v18M4 16l4 4M4 20l4-4M16 4l4 4M16 8l4-4M16 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    </g>
    <defs>
      <clipPath id="tic-tac_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTicTac;
