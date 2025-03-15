import * as React from "react";
import type { SVGProps } from "react";
const SvgCategoryMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#category-minus_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 17h6M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4z"
      />
    </g>
    <defs>
      <clipPath id="category-minus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCategoryMinus;
