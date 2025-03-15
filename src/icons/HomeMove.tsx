import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeMove = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#home-move_svg__a)"
    >
      <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
      <path d="M19 12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5.5M16 19h6M19 16l3 3-3 3" />
    </g>
    <defs>
      <clipPath id="home-move_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHomeMove;
