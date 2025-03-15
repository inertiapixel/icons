import * as React from "react";
import type { SVGProps } from "react";
const SvgZodiacLeo = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#zodiac-leo_svg__a)"
    >
      <path d="M13 17a4 4 0 1 0 8 0M3 16a3 3 0 1 0 6 0 3 3 0 0 0-6 0M7 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
      <path d="M7 7c0 3 2 5 2 9M15 7c0 4-2 6-2 10" />
    </g>
    <defs>
      <clipPath id="zodiac-leo_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZodiacLeo;
