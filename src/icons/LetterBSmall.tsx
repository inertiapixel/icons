import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterBSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#letter-b-small_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12a2 2 0 0 1 0 4h-2V8h2a2 2 0 0 1 0 4m0 0h-2"
      />
    </g>
    <defs>
      <clipPath id="letter-b-small_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterBSmall;
