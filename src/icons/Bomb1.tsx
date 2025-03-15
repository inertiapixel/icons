import * as React from "react";
import type { SVGProps } from "react";
const SvgBomb1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bomb-1_svg__a)"
    >
      <path d="M15.348 5.349 18.65 8.65a1.2 1.2 0 0 1 0 1.698l-.972.972a7.5 7.5 0 1 1-5-5l.972-.972a1.2 1.2 0 0 1 1.698 0z" />
      <path d="m17 7 1.293-1.293A2.41 2.41 0 0 0 19 4a1 1 0 0 1 1-1h1M7 13a3 3 0 0 1 3-3" />
    </g>
    <defs>
      <clipPath id="bomb-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBomb1;
