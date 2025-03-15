import * as React from "react";
import type { SVGProps } from "react";
const SvgWoman1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#woman-1_svg__a)"
    >
      <path d="M10 16v5M14 16v5M8 16h8l-2-7h-4zM5 11q2.5-2 5-2M19 11q-2.5-2-5-2M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    </g>
    <defs>
      <clipPath id="woman-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWoman1;
