import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterCaseUpper = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#letter-case-upper_svg__a)"
    >
      <path d="M3 19V8.5a3.5 3.5 0 1 1 7 0V19M3 13h7M14 19V8.5a3.5 3.5 0 1 1 7 0V19M14 13h7" />
    </g>
    <defs>
      <clipPath id="letter-case-upper_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterCaseUpper;
