import * as React from "react";
import type { SVGProps } from "react";
const SvgRegexOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#regex-off_svg__a)"
    >
      <path d="M6.5 15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M17 7.875l3-1.687M17 7.875v3.375M17 7.875l-3-1.687M17 7.875l3 1.688M17 4.5v3.375M17 7.875l-3 1.688M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="regex-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRegexOff;
