import * as React from "react";
import type { SVGProps } from "react";
const SvgBeer1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#beer-1_svg__a)"
    >
      <path d="M9 21h6a1 1 0 0 0 1-1v-3.625c0-1.397.29-2.775.845-4.025l.31-.7C17.711 10.4 18 9.397 18 8V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4c0 1.397.29 2.4.845 3.65l.31.7c.56 1.268.847 2.64.845 4.025V20a1 1 0 0 0 1 1M6 8h12" />
    </g>
    <defs>
      <clipPath id="beer-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBeer1;
