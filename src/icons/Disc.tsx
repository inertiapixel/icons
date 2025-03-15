import * as React from "react";
import type { SVGProps } from "react";
const SvgDisc = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#disc_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 12a5 5 0 0 1 5-5M12 17a5 5 0 0 0 5-5" />
    </g>
    <defs>
      <clipPath id="disc_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDisc;
