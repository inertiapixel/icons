import * as React from "react";
import type { SVGProps } from "react";
const SvgView360Number = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#view-360-number_svg__a)"
    >
      <path d="M14 6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3M3 5h2.5A1.5 1.5 0 0 1 7 6.5v1A1.5 1.5 0 0 1 5.5 9m0 0H4m1.5 0A1.5 1.5 0 0 1 7 10.5v1A1.5 1.5 0 0 1 5.5 13H3M17 7v4a2 2 0 0 0 4 0V7a2 2 0 1 0-4 0M3 16c0 1.657 4.03 3 9 3s9-1.343 9-3" />
    </g>
    <defs>
      <clipPath id="view-360-number_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgView360Number;
