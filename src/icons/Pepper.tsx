import * as React from "react";
import type { SVGProps } from "react";
const SvgPepper = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pepper_svg__a)"
    >
      <path d="M13 11c0 2.21-2.239 4-5 4s-5-1.79-5-4a8 8 0 0 0 16 0 3 3 0 0 0-6 0" />
      <path d="M16 8c0-2 2-4 4-4" />
    </g>
    <defs>
      <clipPath id="pepper_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPepper;
