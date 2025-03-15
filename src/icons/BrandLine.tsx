import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-line_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 10.663C21 6.439 16.959 3 12 3s-9 3.439-9 7.663c0 3.783 3.201 6.958 7.527 7.56 1.053.239.932.644.696 2.133-.039.238-.184.932.777.512.96-.42 5.18-3.201 7.073-5.48C20.377 13.884 21 12.359 21 10.673z"
      />
    </g>
    <defs>
      <clipPath id="brand-line_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandLine;
