import * as React from "react";
import type { SVGProps } from "react";
const SvgPointerStar = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pointer-star_svg__a)"
    >
      <path d="M17.891 10.132a1.2 1.2 0 0 0-.309-2.228L4 4l3.904 13.563a1.2 1.2 0 0 0 2.228.308M17.798 20.818l-2.172 1.137a.392.392 0 0 1-.568-.41l.415-2.41-1.757-1.708a.39.39 0 0 1 .217-.665l2.428-.352 1.086-2.193a.391.391 0 0 1 .702 0l1.086 2.193 2.428.352a.389.389 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.567.412z" />
    </g>
    <defs>
      <clipPath id="pointer-star_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPointerStar;
