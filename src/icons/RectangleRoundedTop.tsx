import * as React from "react";
import type { SVGProps } from "react";
const SvgRectangleRoundedTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#rectangle-rounded-top_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 6h6a6 6 0 0 1 6 6v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5a6 6 0 0 1 6-6"
      />
    </g>
    <defs>
      <clipPath id="rectangle-rounded-top_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRectangleRoundedTop;
