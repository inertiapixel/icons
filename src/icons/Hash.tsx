import * as React from "react";
import type { SVGProps } from "react";
const SvgHash = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hash_svg__a)"
    >
      <path d="M5 9h14M5 15h14M11 4 7 20M17 4l-4 16" />
    </g>
    <defs>
      <clipPath id="hash_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHash;
