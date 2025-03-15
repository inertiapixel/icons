import * as React from "react";
import type { SVGProps } from "react";
const SvgChisel = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chisel_svg__a)"
    >
      <path d="m14 14 1.5 1.5M18.347 15.575l2.08 2.079a1.96 1.96 0 0 1-2.773 2.771l-2.08-2.079a1.96 1.96 0 0 1 2.773-2.771M3 6l3-3 7.414 7.414A2 2 0 0 1 14 11.828V14h-2.172a2 2 0 0 1-1.414-.586z" />
    </g>
    <defs>
      <clipPath id="chisel_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChisel;
