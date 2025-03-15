import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarkMinus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bookmark-minus_svg__a)"
    >
      <path d="m12 17-6 4V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v8M16 19h6" />
    </g>
    <defs>
      <clipPath id="bookmark-minus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBookmarkMinus;
