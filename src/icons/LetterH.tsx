import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterH = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#letter-h_svg__a)"
    >
      <path d="M17 4v16M7 12h10M7 4v16" />
    </g>
    <defs>
      <clipPath id="letter-h_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterH;
