import * as React from "react";
import type { SVGProps } from "react";
const SvgNeedle = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#needle_svg__a)"
    >
      <path d="M2.998 20.999q-1-1 11.785-16.709a3.5 3.5 0 1 1 5.078 4.791Q4 21.999 2.998 20.999M17.5 6.5l-1 1" />
    </g>
    <defs>
      <clipPath id="needle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNeedle;
