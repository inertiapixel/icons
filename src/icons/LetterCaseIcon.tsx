import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterCaseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#letter-case-icon_svg__a)"
    >
      <path d="M14 15.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0M3 19V8.5a3.5 3.5 0 1 1 7 0V19M3 13h7M21 12v7" />
    </g>
    <defs>
      <clipPath id="letter-case-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterCaseIcon;
