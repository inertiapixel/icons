import * as React from "react";
import type { SVGProps } from "react";
const SvgPolaroid1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#polaroid-1_svg__a)"
    >
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM4 16h16" />
      <path d="m4 12.002 3-3c.928-.893 2.072-.893 3 0l4 4" />
      <path d="m13 12.002 2-2c.928-.893 2.072-.893 3 0l2 2M14 7h.01" />
    </g>
    <defs>
      <clipPath id="polaroid-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPolaroid1;
