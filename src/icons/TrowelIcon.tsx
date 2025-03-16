import * as React from "react";
import type { SVGProps } from "react";
const SvgTrowelIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#trowel-icon_svg__a)"
    >
      <path d="M14.42 9.058 9.06 14.42a1.978 1.978 0 0 1-3.275-.773L3.102 5.604a1.978 1.978 0 0 1 2.502-2.502l8.044 2.682a1.978 1.978 0 0 1 .773 3.274M10 10l6.5 6.5M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1-2.773 2.771l-1.08-1.079a1.96 1.96 0 0 1 2.773-2.771" />
    </g>
    <defs>
      <clipPath id="trowel-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrowelIcon;
