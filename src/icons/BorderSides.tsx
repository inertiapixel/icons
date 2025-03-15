import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderSides = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#border-sides_svg__a)"
    >
      <path d="M4 8v8M20 16V8M8 4h8M8 20h8" />
    </g>
    <defs>
      <clipPath id="border-sides_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBorderSides;
