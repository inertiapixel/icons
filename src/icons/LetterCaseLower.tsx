import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterCaseLower = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#letter-case-lower_svg__a)"
    >
      <path d="M3 15.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0M10 12v7M14 15.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0M21 12v7" />
    </g>
    <defs>
      <clipPath id="letter-case-lower_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterCaseLower;
