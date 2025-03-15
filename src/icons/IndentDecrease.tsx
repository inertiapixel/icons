import * as React from "react";
import type { SVGProps } from "react";
const SvgIndentDecrease = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#indent-decrease_svg__a)"
    >
      <path d="M20 6h-7M20 12h-9M20 18h-7M8 8l-4 4 4 4" />
    </g>
    <defs>
      <clipPath id="indent-decrease_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIndentDecrease;
