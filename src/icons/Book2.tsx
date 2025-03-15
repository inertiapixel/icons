import * as React from "react";
import type { SVGProps } from "react";
const SvgBook2 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#book-2_svg__a)"
    >
      <path d="M19 4v16H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M19 16H7a2 2 0 0 0-2 2M9 8h6" />
    </g>
    <defs>
      <clipPath id="book-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBook2;
