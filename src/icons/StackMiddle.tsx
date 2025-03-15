import * as React from "react";
import type { SVGProps } from "react";
const SvgStackMiddle = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#stack-middle_svg__a)"
    >
      <path d="m16 10 4-2-8-4-8 4 4 2" />
      <path fill="currentColor" d="m12 12-4-2-4 2 8 4 8-4-4-2z" />
      <path d="m8 14-4 2 8 4 8-4-4-2" />
    </g>
    <defs>
      <clipPath id="stack-middle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStackMiddle;
