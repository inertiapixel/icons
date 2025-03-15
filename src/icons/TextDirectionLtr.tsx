import * as React from "react";
import type { SVGProps } from "react";
const SvgTextDirectionLtr = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#text-direction-ltr_svg__a)"
    >
      <path d="M5 19h14M17 21l2-2-2-2M16 4H9.5a3.5 3.5 0 1 0 0 7h.5M14 15V4M10 15V4" />
    </g>
    <defs>
      <clipPath id="text-direction-ltr_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextDirectionLtr;
