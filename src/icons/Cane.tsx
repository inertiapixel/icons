import * as React from "react";
import type { SVGProps } from "react";
const SvgCane = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cane_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m9 21 6.324-11.69c.54-.974 1.756-4.104-1.499-5.762S8.65 4.41 8 5.58"
      />
    </g>
    <defs>
      <clipPath id="cane_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCane;
