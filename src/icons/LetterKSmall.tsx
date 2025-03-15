import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterKSmall = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#letter-k-small_svg__a)"
    >
      <path d="M10.5 8v8M14.5 8l-3 4 3 4M10.5 12h1" />
    </g>
    <defs>
      <clipPath id="letter-k-small_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterKSmall;
